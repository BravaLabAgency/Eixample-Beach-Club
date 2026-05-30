import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BeachClubPage } from "@/components/beach-club/BeachClubPage";
import { beachClubCopy } from "@/lib/beachClubContent";
import { isLanguage, languages, type Language } from "@/lib/constants";

type PageProps = {
  params: {
    lang: string;
  };
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const lang = isLanguage(params.lang) ? params.lang : "es";
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

export default function HomePage({ params }: PageProps) {
  if (!isLanguage(params.lang)) {
    notFound();
  }

  const lang = params.lang as Language;

  return <BeachClubPage lang={lang} copy={beachClubCopy[lang]} />;
}
