import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import content from "@/data/institution-content.json";

export const metadata: Metadata = { title: "Computer Science & Engineering" };
const cse = content.department_copy.find(item => item.name === "CSE")!;
const labs = cse.labs ?? [];

export default function CsePage() {
  return <><section className="page-banner"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / Departments / CSE</div><h1 className="display">Computer Science & Engineering.</h1><p>An academic preview of the CSE department, using vetted public-source descriptions and facilities references.</p></div></section>
    <section className="section"><div className="container department-intro"><div><h2 className="display">A foundation for what’s next.</h2><p>{cse.summary}</p><p>Explore the blend of foundational computing, practical lab work and opportunities to develop a problem-solving mindset.</p><Link href="/programmes" className="text-link">Explore computing programmes <ArrowRight size={16} /></Link></div><div className="department-photo"><Image src="/gift/classroom.webp" alt="Students attending a session in a GIFT classroom" fill sizes="(max-width: 760px) 100vw, 45vw" /></div></div></section>
    <section className="section labs"><div className="container"><h2 className="display">Spaces for practical learning.</h2><p style={{color:"#566d83",maxWidth:620}}>The department’s published facilities information references these laboratory areas. Facilities should be confirmed with the college before publication.</p><div className="lab-grid">{labs.map((lab,index) => <div className="lab-item" key={lab}><span>Lab area {String(index+1).padStart(2,"0")}</span><h3>{lab}</h3></div>)}</div></div></section>
    <section className="section"><div className="container department-callout"><div><h2>Meet the department through its official pages.</h2><p>Faculty details and current academic information remain on the institution’s website; no profiles are simulated here.</p></div><a href="https://top-autonomous-college-in-odisha.gift.edu.in/cse/" className="button" target="_blank" rel="noreferrer">Official CSE page <ArrowUpRight size={16} /></a></div></section>
  </>;
}
