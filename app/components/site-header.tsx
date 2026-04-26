import { ChevronDownIcon, LanguagesIcon } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Separator } from "~/components/ui/separator";
import {
  defaultLocale,
  isLocale,
  localeMetadata,
  localizePath,
  secondaryLocales,
  type Locale,
} from "~/lib/i18n";
import type { HeaderMessages } from "~/lib/messages";
import { cn } from "~/lib/utils";

export function SiteHeader({ copy, locale }: { copy: HeaderMessages; locale: Locale }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navItems = [
    { to: localizePath(locale, "/about"), label: copy.about },
    { to: localizePath(locale, "/projects"), label: copy.projects },
    { to: localizePath(locale, "/blog"), label: copy.journal },
  ];
  const localeOptions: Locale[] = [defaultLocale, ...secondaryLocales];

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <NavLink to={localizePath(locale, "/")} className="block group">
          <span className="block font-heading text-3xl leading-none tracking-tight transition-colors group-hover:text-muted-foreground">
            akazwz
          </span>
          <span className="mt-2 block max-w-md text-sm text-muted-foreground">{copy.tagline}</span>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-2 sm:justify-end">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    size: "sm",
                  }),
                  "rounded-none",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Separator orientation="vertical" className="mx-1 h-5 w-px self-center!" />
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-none px-2 text-[11px]",
              )}
              aria-label={copy.language}
            >
              <LanguagesIcon className="h-3.5 w-3.5" />
              <span>{localeMetadata[locale].label}</span>
              <ChevronDownIcon className="h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-44 w-auto rounded-none">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="normal-case tracking-normal">
                  {copy.language}
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={locale}
                onValueChange={(value) => {
                  if (!isLocale(value)) {
                    return;
                  }

                  void navigate(localizePath(value, pathname));
                }}
              >
                {localeOptions.map((targetLocale) => (
                  <DropdownMenuRadioItem
                    key={targetLocale}
                    value={targetLocale}
                    className="normal-case tracking-normal"
                  >
                    {localeMetadata[targetLocale].nativeName}
                    <DropdownMenuShortcut>
                      {localeMetadata[targetLocale].label}
                    </DropdownMenuShortcut>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Separator orientation="vertical" className="mx-1 h-5 w-px self-center!" />
          <a
            href="https://github.com/akazwz"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-none")}
          >
            <GithubIcon className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com/akazwz_"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-none")}
          >
            <TwitterIcon className="h-4 w-4" />
            <span className="sr-only">X (Twitter)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
