import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/social-icons";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/profile.php?id=61589911111622",
    icon: FacebookIcon,
  },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/117374290/",
    icon: LinkedinIcon,
  },
  { name: "X", href: "#", icon: XIcon },
];

export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:flex-row sm:justify-between sm:px-8 lg:py-16">
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
                className="text-white/70 hover:text-soft-teal"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg">Location</h2>
          <p className="mt-3 text-sm text-white/80">
            Hervey Bay, Queensland
            <br />
            In-person sessions, by appointment
          </p>
          <p className="mt-3 text-sm text-white/80">
            Telehealth available Australia-wide
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/contact" className="hover:text-soft-teal">
                Get in touch
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-soft-teal">
                Our services
              </Link>
            </li>
            <li>
              <Link href="/telehealth" className="hover:text-soft-teal">
                Telehealth
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-soft-teal">
                About Shelley
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-soft-teal">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-soft-teal">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-soft-teal">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60 sm:px-8">
        &copy; {new Date().getFullYear()} Clearshore Counselling. Hervey Bay, QLD.{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-soft-teal">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}
