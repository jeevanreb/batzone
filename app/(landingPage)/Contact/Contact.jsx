"use client";

import React from "react";
import ContactGsap from "./ContactGsap";

const Contact = () => {
  return (
    <ContactGsap>
      <section
        id="contact"
        className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden"
      >
        {/* TOP MARQUEE — scrolls right to left */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden py-2 mt-5">
          <div
            id="contact-top-marquee"
            className="contact-top-marquee-track flex whitespace-nowrap"
          >
            {/* First copy */}
            <div className="contact-top-marquee-content flex whitespace-nowrap shrink-0">
              {[
                "PREMIUM SPORTS STORE",
                "BATZONE GARAGE",
                "BAT CUSTOMIZATION",
                "TOURNAMENT TROPHIES",
                "CUSTOM JERSEYS",
                "LIVE PLAYER AUCTIONS",
                "CRICKET EVENT MANAGEMENT",
                "PREMIUM SPORTS STORE",
                "BATZONE GARAGE",
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <span className="mx-6 text-lg md:text-2xl font-semibold text-white/20 uppercase tracking-widest">
                    {item}
                  </span>
                  <span className="text-[#2352ea]">✦</span>
                </React.Fragment>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div
              className="contact-top-marquee-content flex whitespace-nowrap shrink-0"
              aria-hidden="true"
            >
              {[
                "PREMIUM SPORTS STORE",
                "BATZONE GARAGE",
                "BAT CUSTOMIZATION",
                "TOURNAMENT TROPHIES",
                "CUSTOM JERSEYS",
                "LIVE PLAYER AUCTIONS",
                "CRICKET EVENT MANAGEMENT",
                "PREMIUM SPORTS STORE",
                "BATZONE GARAGE",
              ].map((item, i) => (
                <React.Fragment key={`dup-${i}`}>
                  <span className="mx-6 text-lg md:text-2xl font-semibold text-white/20 uppercase tracking-widest">
                    {item}
                  </span>
                  <span className="text-[#2352ea]">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <section className="flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full px-6 md:px-12 py-2 relative">
          {/* Light Glow */}
          <div className="absolute top-24 -right-24 w-96 h-96 bg-[#ff9159]/10 rounded-full blur-[120px]" />

          {/* Heading */}
          <h2
            id="contact-heading"
            className="text-6xl font-black text-[#FFD700] tracking-tight leading-[0.8] opacity-90 mb-10"
          >
            CONTACT
          </h2>

          {/* Contact Grid */}
          <div className="border-t border-white/10">
            {/* Email */}
            <div className="grid md:grid-cols-12 py-14 md:py-10 border-b border-white/10 group hover:bg-white/5 transition">
              <span className="md:col-span-3 text-xs tracking-[0.3em] text-white/40 group-hover:text-[#FFD700]">
                E-MAIL
              </span>
              <a
                href="mailto:batzone99@gmail.com"
                className="md:col-span-9 mt-4 md:mt-0 text-2xl md:text-3xl lg:text-5xl font-bold hover:text-[#FFD700] transition break-all"
              >
                batzone99@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="grid md:grid-cols-12 py-14 md:py-10 border-b border-white/10 group hover:bg-white/5 transition">
              <span className="md:col-span-3 text-xs tracking-[0.3em] text-white/40 group-hover:text-[#FFD700]">
                PHONE
              </span>
              <a
                href="tel:+917892735114"
                className="md:col-span-9 mt-4 md:mt-0 text-2xl md:text-3xl lg:text-5xl font-bold hover:text-[#FFD700] transition"
              >
                +91 7892735114
              </a>
            </div>

            {/* Social */}
            <div className="grid md:grid-cols-12 py-14 md:py-10 group hover:bg-white/5 transition">
              <span className="md:col-span-3 text-xs tracking-[0.3em] text-white/40 group-hover:text-[#FFD700]">
                SOCIAL
              </span>
              <div className="md:col-span-9 mt-4 md:mt-0 flex flex-wrap gap-6 text-xl md:text-3xl font-bold">
                {/* <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff9159] transition"
                >
                  LinkedIn ↗
                </a> */}
                <a
                  href="https://wa.me/917892735114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition"
                >
                  WhatsApp ↗
                </a>
                <a
                  href="https://www.instagram.com/bat.zone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM MARQUEE — scrolls left to right */}
        <div className="w-full border-y border-white/10 py-6 overflow-hidden">
          <div
            id="contact-bottom-marquee"
            className="contact-bottom-marquee-track flex whitespace-nowrap"
          >
            {/* First copy */}
            <div className="contact-bottom-marquee-content flex whitespace-nowrap shrink-0">
              {[
                "CRAFTED FOR CHAMPIONS",
                "✦",
                "FROM HEMMADY TO EVERY CRICKET GROUND",
                "✦",
                "CUSTOMIZE • REPAIR • COMPETE • WIN",
                "✦",
                "BATZONE - COMPLETE SPORTS SOLUTIONS",
                "✦",
              ].map((item, i) => (
                <span
                  key={i}
                  className={`px-6 text-4xl md:text-6xl font-black uppercase ${item === "✦" ? "text-[#2352ea]" : "text-white/10"
                    }`}
                >
                  {item}
                </span>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div
              className="contact-bottom-marquee-content flex whitespace-nowrap shrink-0"
              aria-hidden="true"
            >
              {[
                "CRAFTED FOR CHAMPIONS",
                "✦",
                "FROM HEMMADY TO EVERY CRICKET GROUND",
                "✦",
                "CUSTOMIZE • REPAIR • COMPETE • WIN",
                "✦",
                "BATZONE - COMPLETE SPORTS SOLUTIONS",
                "✦",
              ].map((item, i) => (
                <span
                  key={`dup-${i}`}
                  className={`px-6 text-4xl md:text-6xl font-black uppercase ${item === "✦" ? "text-[#2352ea]" : "text-white/10"
                    }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContactGsap>
  );
};

export default Contact;
