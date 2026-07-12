"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div className="bg-soft-teal text-ink text-sm text-center py-2 px-4">
        Clearshore Counselling is launching April 2027 —{" "}
        <Link href="/contact" className="font-medium underline underline-offset-2">
          join the waitlist
        </Link>
      </div>

      <div className="bg-teal text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Clearshore Counselling logo"
              width={88}
              height={88}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20"
            />
            <span className="font-heading text-xl leading-none">
              Clearshore Counselling
            </span>
          </Link>

          <ul className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/90 transition-colors hover:text-soft-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <Button
              render={<Link href="/contact" />}
              className="bg-gold text-ink hover:bg-gold/90"
            >
              Book a session
            </Button>
          </div>

          <button
            type="button"
            className="sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        <ul
          className={cn(
            "flex flex-col gap-1 border-t border-white/10 px-4 pb-4 sm:hidden",
            mobileOpen ? "block" : "hidden"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-white/90 hover:text-soft-teal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button
              render={<Link href="/contact" />}
              className="w-full bg-gold text-ink hover:bg-gold/90"
              onClick={() => setMobileOpen(false)}
            >
              Book a session
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
