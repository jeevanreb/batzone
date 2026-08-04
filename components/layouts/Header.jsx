"use client";

import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Garage", href: "/garage" },
  { name: "Jersey", href: "/jersey" },
  { name: "Tournament", href: "/tournament-event" },
  { name: "Trophies", href: "/trophies" },
  // { name: "Auction", href: "https://batzoneauctionmanagement.com/", target: "_blank" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  console.log("0.1.0 version");


  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="absolute top-0 left-0 w-full py-3 z-50 flex items-center justify-between gap-4 px-4 md:px-10 lg:px-16 ">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="BatZone home">
          <Image
            src="/logo.png"
            alt="BatZone"
            width={170}
            height={46}
            priority
            className="h-14 w-auto object-contain md:h-14"
          />
        </Link>

        {/* Desktop nav pill */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/20 py-1.5 pr-1.5 pl-3 shadow-[0_8px_30px_rgba(15,26,42,0.06)] ring-1 ring-white/40 backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}

                  className={`block rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${isActive(link.href)
                    ? "text-[var(--brand-pink)]"
                    : "text-[var(--nav-text)] hover:text-[var(--ink)]"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://batzoneauctionmanagement.com/" target="_blank"
                className="ml-1 block rounded-full bg-[#FCD400] px-6 py-2.5 text-[15px] font-semibold text-white  transition-colors duration-200 hover:bg-[#ffe044] "
              >
                Auction
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--ink)]  ring-1 ring-black/[0.05] lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-0 right-0 flex h-full w-[82%] max-w-sm flex-col bg-white px-6 py-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <Image
                  src="/logo.png"
                  alt="BatZone"
                  width={150}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--ink)] ring-1 ring-black/[0.06]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive(link.href)
                        ? "bg-[var(--brand-pink)]/10 text-[var(--brand-pink)]"
                        : "text-[var(--nav-text)] hover:bg-black/[0.04] hover:text-[var(--ink)]"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="mt-6 block rounded-full bg-[var(--brand-pink)] px-6 py-3 text-center text-base font-semibold text-white shadow-[0_6px_16px_rgba(229,26,110,0.35)] transition-colors hover:bg-[var(--brand-pink-hover)]"
              >
                Register
              </Link> */}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default memo(Header);
