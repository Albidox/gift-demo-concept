import type { Metadata } from "next";
import Link from "next/link";
import { ProgrammeFinder } from "@/components/programme-finder";

export const metadata: Metadata = { title: "Programme Finder" };

export default function ProgrammesPage() {
  return <><section className="page-banner"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / Programmes</div><h1 className="display">Explore your next chapter.</h1><p>Search the 27 public-source listings gathered for this concept. Current programme availability and admissions information require confirmation from GIFT.</p></div></section><ProgrammeFinder /></>;
}
