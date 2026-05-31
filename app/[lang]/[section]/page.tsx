import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeachClubPage, type BeachClubView } from "@/components/beach-club/BeachClubPage";
import { beachClubCopy } from "@/lib/beachClubContent";
import { isLanguage, languages, type Language } from "@/lib/constants";

const sections = ["experience", "reservations", "events", "gastronomy", "contact"] as const;

type Section = (typeof sections)[number];

type PageProps = {
  params: Promise<{
    lang: string;
    section: string;
  }>;
};

function isSection(value: string): value is Section {
  return sections.includes(value as Section);
}

function sectionLabel(copy: (typeof beachClubCopy)[Language], section: Section) {
  return copy.nav.find((item) => item.href === section)?.label ?? copy.common.brand;
}

export function generateStaticParams() {
  return languages.flatMap((language) => sections.map((section) => ({ lang: language.code, section })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: paramLang, section: paramSection } = await params;
  const lang = isLanguage(paramLang) ? paramLang : "es";
  const section = isSection(paramSection) ? paramSection : "experience";
  const copy = beachClubCopy[lang];
  const label = sectionLabel(copy, section);

  return {
    title: `${label} | ${copy.common.brand}`,
    description: copy.metadata.description,
    keywords: [...copy.metadata.keywords],
    alternates: {
      canonical: `/${lang}/${section}`,
      languages: {
        ca: `/ca/${section}`,
        es: `/es/${section}`,
        en: `/en/${section}`,
        fr: `/fr/${section}`
      }
    },
    openGraph: {
      title: `${label} | ${copy.common.brand}`,
      description: copy.metadata.description,
      type: "website",
      locale: lang,
      images: [copy.hero.poster]
    }
  };
}

export default async function SectionPage({ params }: PageProps) {
  const { lang: paramLang, section: paramSection } = await params;

  if (!isLanguage(paramLang) || !isSection(paramSection)) {
    notFound();
  }

  const lang = paramLang as Language;

  return <BeachClubPage lang={lang} copy={beachClubCopy[lang]} view={paramSection as BeachClubView} />;
}
