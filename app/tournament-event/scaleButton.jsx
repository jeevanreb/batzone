"use client";

import { useState } from "react";

/**
 * Replicates the original page's global button micro-interaction:
 * mousedown/mouseleave/mouseup toggling a `scale-95` class.
 */
export default function ScaleButton({ as: Tag = "button", className = "", children, ...props }) {
    const [pressed, setPressed] = useState(false);

    return (
        <Tag
            className={`${className} ${pressed ? "scale-95" : ""} duration-150 ease-in-out transition-transform`}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            {...props}
        >
            {children}
        </Tag>
    );
}