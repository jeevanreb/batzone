"use client";

import React from "react";

export function AmbassadorButton({ children, onClick, className = "", id }) {
    return (
        <button
            id={id}
            onClick={onClick}
            className={`cursor-pointer transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    );
}

export function AmbassadorCtaButton({ id }) {
    const handleScrollToContact = () => {
        const contactElement = document.getElementById("contact-section") || document.getElementById("Contact");
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            id={id}
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
            <span>Connect With BatZone</span>
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </button>
    );
}
