import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon } from "@/components/social-icons";
import { services } from "@/lib/services";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/profile.php?id=61589911111622",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/117374290/",
    icon: LinkedinIcon,
  },
];

const CONTACT_EMAIL = "hello@clearshorecounselling.com";

export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-16">
        <div className="sm:max-w-xs">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Clearshore Counselling logo" width={36} height={36} />
            <span className="font-heading text-lg">Clearshore Counselling</span>
          </div>
          <p className="mt-3 text-sm text-white/80">
            A calm, grounded space for grief, trauma and life&apos;s hardest seasons.
          </p>
          <div className="mt-4 flex items-center gap-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-white/70 hover:text-white"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-white hover:underline hover:underline-offset-2"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-white hover:underline hover:underline-offset-2">
                About Shelley
              </Link>
            </li>
            <li>
              <Link href="/telehealth" className="hover:text-white hover:underline hover:underline-offset-2">
                Telehealth
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white hover:underline hover:underline-offset-2">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-white hover:underline hover:underline-offset-2">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white hover:underline hover:underline-offset-2">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:underline hover:underline-offset-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg">Get in touch</h2>
          <p className="mt-3 text-sm text-white/80">
            Hervey Bay, Queensland
            <br />
            In-person sessions, by appointment
            <br />
            Telehealth Australia-wide
          </p>
          <p className="mt-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/80 underline underline-offset-2 hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[color-mix(in_srgb,var(--color-teal)_85%,black)] px-6 py-4 text-center text-sm text-white/90 sm:px-8">
        Clearshore Counselling is not a crisis service. If you need support
        right now, call{" "}
        <a href="tel:131114" className="font-medium underline underline-offset-2 hover:text-white">
          Lifeline on 13 11 14
        </a>{" "}
        (24/7) or{" "}
        <a href="tel:000" className="font-medium underline underline-offset-2 hover:text-white">
          000
        </a>{" "}
        in an emergency.
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60 sm:px-8">
        &copy; {new Date().getFullYear()} Clearshore Counselling. Hervey Bay, QLD.{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}
