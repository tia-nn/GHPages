import React from "react";

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a {...props} className={`text-portage-700 visited:text-lavender-700 hover:underline ${props.className || ""}`} />
    );
}
