import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Clearshore Counselling logo" width={36} height={36} />
            <span className="font-heading text-lg">Clearshore Counselling</span>
          </div>
          <p className="mt-3 text-sm text-white/80">
            A calm, grounded space for grief, trauma and life&apos;s hardest seasons.
          </p>
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
              <Link href="/about" className="hover:text-soft-teal">
                About Shelley
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

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60 sm:px-6">
        &copy; {new Date().getFullYear()} Clearshore Counselling. Hervey Bay, QLD.
      </div>
    </footer>
  );
}
