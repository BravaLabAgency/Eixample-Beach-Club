import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { mailtoHref } from "@/lib/constants";
import type { Dictionary } from "@/lib/dictionaries";

type FinalCTAProps = {
  dict: Dictionary;
};

export function FinalCTA({ dict }: FinalCTAProps) {
  return (
    <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <Container className="rounded-lg border border-navy/10 bg-navy px-6 py-8 text-white shadow-soft sm:px-10 lg:px-14">
        <div className="flex justify-start lg:justify-end">
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={mailtoHref} icon={Mail} className="border-white bg-white text-navy hover:border-sky hover:bg-sky">
              {dict.common.cta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
