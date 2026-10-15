import { localized } from "../i18n/locale.ts";
import { useLocale, useMessages } from "../i18n/use.ts";
import { TextLink } from "../ui/TextLink.tsx";
import { Head } from "./Head.tsx";
import { Page } from "./Page.tsx";
import { PageIntro } from "./PageIntro.tsx";

// The page for an address that has nothing: an unknown path, or a post that does not exist.
export function NotFound() {
  const locale = useLocale();
  const t = useMessages();
  return (
    <Page>
      <Head title={t().notFound.title} description={t().notFound.body} path="/404" noindex />
      <PageIntro title={t().notFound.title} description={t().notFound.body}>
        <div>
          <TextLink href={localized(locale(), "/")}>{t().notFound.home}</TextLink>
        </div>
      </PageIntro>
    </Page>
  );
}
