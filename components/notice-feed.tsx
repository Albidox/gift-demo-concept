"use client";

import { useNotices } from "@/lib/notices";

export function NoticeFeed() {
  const notices = useNotices();
  return <div className="notice-list" aria-live="polite">
    {notices.slice(0, 3).map(notice => <article className="notice-card" key={notice.id}><span className="tag">Browser-local demo notice</span><h3>{notice.title}</h3><p className="notice-body">{notice.body}</p><p className="date">Created {notice.created}</p></article>)}
    <article className="notice-card"><span className="tag">Explore</span><h3>Find your academic path</h3><p>Browse the programme reference listings by level or area of study.</p><p className="date">Demo content · confirm current offerings with GIFT</p></article>
    <article className="notice-card"><span className="tag">Campus</span><h3>Discover life beyond the classroom</h3><p>See a selection of original campus and student activity photographs.</p><p className="date">Public-source gallery reference</p></article>
    {notices.length === 0 && <article className="notice-card"><span className="tag">Preview workflow</span><h3>Publish a sample notice</h3><p>Use the simulated admin preview to see how an announcement could appear here.</p><p className="date">No live notices are connected</p></article>}
  </div>;
}
