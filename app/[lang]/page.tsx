import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeachClubPage } from "@/components/beach-club/BeachClubPage";
import { beachClubCopy } from "@/lib/beachClubContent";
import { isLanguage, languages, type Language } from "@/lib/constants";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: paramLang } = await params;
  const lang = isLanguage(paramLang) ? paramLang : "es";
  const copy = beachClubCopy[lang];

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    keywords: [...copy.metadata.keywords],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ca: "/ca",
        es: "/es",
        en: "/en",
        fr: "/fr"
      }
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      type: "website",
      locale: lang,
      images: [copy.hero.poster]
    }
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang: paramLang } = await params;

  if (!isLanguage(paramLang)) {
    notFound();
  }

  const lang = paramLang as Language;

  return <BeachClubPage lang={lang} copy={beachClubCopy[lang]} />;
}
