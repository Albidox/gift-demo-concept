"use client";

import { useState } from "react";
import { ArrowUpRight, Plus, Search } from "lucide-react";
import programmes from "@/data/programmes.json";

type Programme = { level: string; name: string; source: string; status: string };
const records: Programme[] = programmes;
const levels = ["All", "B.Tech", "Diploma", "M.Tech", "MBA", "MCA", "BCA", "BBA", "MSc", "PhD"];

export function ProgrammeFinder() {
  const [level, setLevel] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = records.filter(item => (level === "All" || item.level === level) && `${item.level} ${item.name}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="finder container">
    <div className="finder-controls"><label className="search-wrap"><Search size={18} aria-hidden="true" /><span className="sr-only">Search programmes</span><input type="search" name="programme-search" autoComplete="off" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by programme or subject…" /></label></div>
    <div className="filter-pills" aria-label="Programme level filters">{levels.map(item => <button type="button" key={item} aria-pressed={item === level} onClick={() => setLevel(item)}>{item}</button>)}</div>
    <p className="finder-count" role="status">Showing {filtered.length} of {records.length} collected listings</p>
    {filtered.length ? <div className="finder-list">{filtered.map((item, index) => <details className="programme-row" key={`${item.level}-${item.name}-${index}`}><summary><span><small>{item.level}</small><b>{item.name}</b></span><Plus className="row-arrow" size={22} aria-hidden="true" /></summary><div className="programme-detail"><p>This is a public-source reference listing, not a current admissions offer. Confirm availability, eligibility and intake directly with GIFT.</p><a href={item.source} target="_blank" rel="noreferrer">View original public source <ArrowUpRight size={14} style={{display:"inline"}} /></a></div></details>)}</div> : <div className="empty">No matching programmes. Try a different search term or select All.</div>}
  </div>;
}
