import Link from "next/link";
import Image from "next/image";
import MaxWidth from "../MaxWidth";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "Garage", href: "/garage" },
  { name: "Jersey", href: "/jersey" },
  { name: "Tournament", href: "/tournament-event" },
  { name: "Auction", href: "https://batzoneauctionmanagement.com/", target: "_blank" },
];

const RESOURCES = [
  { name: "FAQ", href: "/" },
  { name: "Terms & Conditions", href: "/" },
  { name: "Privacy Policy", href: "/" },
  { name: "Blog", href: "/" },
  // { name: "Login", href: "/" },
];

const linkClass =
  "text-[15px] text-white/45 transition-colors duration-200 hover:text-white";
const headingClass = "text-2xl font-bold text-white";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <MaxWidth>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4 lg:pr-10">
            <Link href="/" className="flex items-center gap-3" aria-label="BatZone home">
              <span className="relative block h-11 w-11 shrink-0 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="BatZone"
                  width={2810}
                  height={918}
                  priority
                  className="h-11 w-auto max-w-none object-left"
                />
              </span>
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-white">Bat</span>
                <span className="text-[var(--brand-pink)]"> Zone</span>
              </span>
            </Link>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-white/55">
              BatZone is proudly based in Hemmadi, dedicated to providing quality sports products and services. We offer all types of sports items, including cricket equipment, along with customized jerseys for tournaments, schools, clubs, and corporate teams. We also supply premium trophies, medals, and mementos to celebrate every sporting achievemen
            </p>

            {/* <div className="mt-8 flex items-center gap-3 ">
              <PaymentChip label="Visa">
                <span className="text-[13px] font-bold italic tracking-tight text-[#1A1F71]">
                  VISA
                </span>
              </PaymentChip>
              <PaymentChip label="Mastercard">
                <span className="relative flex items-center">
                  <span className="h-4 w-4 rounded-full bg-[#EB001B]" />
                  <span className="-ml-1.5 h-4 w-4 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply" />
                </span>
              </PaymentChip>
              <PaymentChip label="American Express">
                <span className="flex h-5 w-9 flex-col items-center justify-center rounded-[2px] bg-[#2E77BC] leading-none">
                  <span className="text-[5px] font-bold tracking-tight text-white">
                    AMERICAN
                  </span>
                  <span className="text-[5px] font-bold tracking-tight text-white">
                    EXPRESS
                  </span>
                </span>
              </PaymentChip>
              <PaymentChip label="PayPal">
                <span className="text-[13px] font-bold italic tracking-tight">
                  <span className="text-[#003087]">Pay</span>
                  <span className="text-[#009CDE]">Pal</span>
                </span>
              </PaymentChip>
            </div> */}
          </div>

          {/* Contact + Address */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10">
            <h3 className={headingClass}>Contact</h3>
            <div className="mt-6 space-y-2 text-[15px] text-white/45">
              <p>Mob: +91 7892735114</p>
              <p>batzone99@gmail.com</p>
            </div>

            <h3 className={`${headingClass} mt-10`}>Address</h3>
            <p className="mt-6 text-[15px] leading-7 text-white/45">
              MD Complex
              <br />
              1st floor,
              <br />
              Hemmadi - 576230
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="mt-6 space-y-5">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link  href={link.href}
                  target={link.target} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Resources</h3>
            <ul className="mt-6 space-y-5">
              {RESOURCES.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidth>
    </footer>
  );
};

const PaymentChip = ({ label, children }) => (
  <span
    aria-label={label}
    className="flex h-9 w-14 items-center justify-center rounded-md bg-white shadow-sm"
  >
    {children}
  </span>
);

export default Footer;
