import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return <footer className="footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-brand"><Link className="brand" href="/"><Image src="/gift/gift-logo.png" alt="" width={58} height={66} /><span className="brand-text"><b>GIFT</b><small>Autonomous · Bhubaneswar</small></span></Link><p>An unofficial design concept prepared for a GIFT management discussion. Not an institutional website or live service.</p></div>
      <div><h3>Explore</h3><div className="footer-links"><Link href="/">Home</Link><Link href="/programmes">Programmes</Link><Link href="/departments/cse">CSE Department</Link><Link href="/admin">Admin preview</Link></div></div>
      <div><h3>Official resources ↗</h3><div className="footer-links"><a href="https://top-autonomous-college-in-odisha.gift.edu.in/" target="_blank" rel="noreferrer">Institution website</a><a href="https://timetable.gift.edu.in/" target="_blank" rel="noreferrer">Timetable portal</a><a href="https://cms.gift.edu.in/" target="_blank" rel="noreferrer">Student CMS</a></div></div>
      <div><h3>Connect</h3><div className="footer-links"><a href="mailto:info@gift.edu.in">info@gift.edu.in</a><a href="https://www.instagram.com/gift.autonomous.bhubaneswar/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/@GIFTAutonomousBBSR" target="_blank" rel="noreferrer">YouTube ↗</a></div></div>
    </div>
    <div className="footer-bottom"><span>© GIFT concept preview · Quadvexa · Unofficial proposal</span><span>GIFT imagery sourced from public pages; provenance in the project repository.</span></div>
  </div></footer>;
}
