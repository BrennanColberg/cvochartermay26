"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/#measures", label: "Learn More" },
  { href: "/faq", label: "FAQ" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/press", label: "Press" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav id="site-nav" className={open ? "open" : ""}>
      <Link className="nav-brand" href="/">Good Governance Corvallis</Link>
      <button
        id="nav-toggle"
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "×" : "☰"}
      </button>
      <div className="nav-links">
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={!href.includes("#") && pathname.startsWith(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <a href="/donate" className="nav-donate">DONATE</a>
      </div>
    </nav>
  );
}
