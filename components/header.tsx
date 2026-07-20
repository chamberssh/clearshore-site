"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header>
      <div className="bg-soft-teal text-ink text-sm text-center py-2 px-4">
        Clearshore Counselling is launching April 2027 —{" "}
        <Link href="/contact#waitlist" className="font-medium underline underline-offset-2">
          join the waitlist
        </Link>
      </div>

      <div className="bg-teal text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Clearshore Counselling logo"
              width={88}
              height={88}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20"
            />
            <span className="hidden font-heading text-xl leading-none 2xl:block">
              Clearshore Counselling
            </span>
          </Link>

          <ul className="hidden items-center gap-6 xl:flex 2xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "border-b-2 pb-0.5 transition-colors hover:text-white",
                    isActive(link.href)
                      ? "border-gold text-white"
                      : "border-transparent text-white/85"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Button
              render={<Link href="/contact#waitlist" />}
              nativeButton={false}
              className="bg-gold text-ink hover:bg-gold/90"
            >
              Join the waitlist
            </Button>
          </div>

          <button
            type="button"
            className="xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        <ul
          className={cn(
            "flex flex-col gap-1 border-t border-white/10 px-4 pb-4 xl:hidden",
            mobileOpen ? "block" : "hidden"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "block border-l-2 py-2 pl-3 hover:text-white",
                  isActive(link.href)
                    ? "border-gold text-white"
                    : "border-transparent text-white/85"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button
              render={<Link href="/contact#waitlist" />}
              nativeButton={false}
              className="w-full bg-gold text-ink hover:bg-gold/90"
              onClick={() => setMobileOpen(false)}
            >
              Join the waitlist
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
