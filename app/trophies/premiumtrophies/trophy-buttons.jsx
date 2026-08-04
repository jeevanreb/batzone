"use client";

import { useState } from "react";

export default function TrophyButtons() {
    const [mode, setMode] = useState("modern");

    return (
        <div
            id="trophies-premium-toggle"
            className="inline-flex p-1 bg-[#f2f3f6] border border-[#e5e6ec]"
        >
            {["modern"].map((m) => (
                <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-6 py-2 text-[10px] uppercase transition-colors ${
                        mode === m ? "bg-[#2352ea] text-white" : "text-[#8e90a1]"
                    }`}
                >
                    {m}
                </button>
            ))}
        </div>
    );
}

