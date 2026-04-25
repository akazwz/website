import { NavLink } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Journal" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <NavLink to="/" className="block group">
          <span className="block font-heading text-3xl leading-none tracking-tight transition-colors group-hover:text-muted-foreground">
            akazwz
          </span>
          <span className="mt-2 block max-w-md text-sm text-muted-foreground">
            Full-stack developer & open-source creator.
          </span>
        </NavLink>

        <nav className="flex items-center gap-2">
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
          <Separator orientation="vertical" className="mx-1 h-5 w-px !self-center" />
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
