"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/programmes", label: "Programmes" },
  { href: "/departments/cse", label: "CSE Department" },
  { href: "/#life", label: "Life at GIFT" },
  { href: "/admin", label: "Admin preview", cta: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <>
    <div className="demo-strip"><div className="container"><span><strong>UNOFFICIAL CONCEPT</strong> · Private frontend preview by Quadvexa</span><span className="utility"><a href="https://cms.gift.edu.in/" target="_blank" rel="noreferrer">Official student CMS ↗</a> &nbsp; · &nbsp; <a href="https://timetable.gift.edu.in/" target="_blank" rel="noreferrer">Official timetable ↗</a></span></div></div>
    <header className="site-header"><div className="container header-main">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <Image src="/gift/gift-logo.png" alt="" width={58} height={66} priority />
        <span className="brand-text"><b>GIFT</b><small>Autonomous · Bhubaneswar</small></span>
      </Link>
      <button type="button" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      <nav id="site-navigation" aria-label="Main navigation" className={`nav${open ? " open" : ""}`}>
        {links.map(link => <Link key={link.href} href={link.href} className={link.cta ? "nav-cta" : undefined} aria-current={path === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
      </nav>
    </div></header>
  </>;
}
