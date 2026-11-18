"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { saveNotices, useNotices } from "@/lib/notices";

export function AdminPreview() {
  const notices = useNotices();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const notice = { id: crypto.randomUUID(), title: title.trim(), body: body.trim(), created: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) };
    if (!notice.title || !notice.body) return;
    const updated = [notice, ...notices].slice(0, 10);
    saveNotices(updated);
    setTitle(""); setBody(""); setMessage("Sample notice published in this browser only. View it on the homepage.");
  }

  function remove(id: string) {
    if (!window.confirm("Remove this browser-local sample notice?")) return;
    const updated = notices.filter(notice => notice.id !== id);
    saveNotices(updated); setMessage("Sample notice removed from this browser.");
  }

  function reset() { if (!window.confirm("Reset all browser-local sample notices?")) return; saveNotices([]); setTitle(""); setBody(""); setMessage("Demo notices reset. No institutional data was changed."); }

  return <section className="admin-shell"><div className="container admin-frame"><aside className="admin-side"><h2>GIFT / Preview</h2><p>Concept workspace · not secured</p><span className="selected">Overview</span><span>Notices · sample</span><span>Students · not in demo</span><span>Academics · not in demo</span><Link href="/">Public concept <ArrowRight size={14} style={{display:"inline"}} /></Link></aside><div className="admin-content"><h1>Administration preview.</h1><p>A demonstration of a clearer campus publishing workflow.</p><div className="admin-warning"><strong>Simulated interface.</strong> There is no login, access control, server or database. Sample notices stay only in this browser’s local storage.</div>
    <div className="admin-columns"><div className="admin-panel"><h2>Create a sample notice</h2><form onSubmit={publish}><label htmlFor="notice-title">Notice title</label><input id="notice-title" name="notice-title" autoComplete="off" value={title} onChange={event => setTitle(event.target.value)} maxLength={90} required placeholder="e.g. Campus design review…" /><label htmlFor="notice-body">Short description</label><textarea id="notice-body" name="notice-body" autoComplete="off" value={body} onChange={event => setBody(event.target.value)} maxLength={280} required placeholder="Write a fictitious announcement for the demo…" /><button className="button" type="submit">Publish locally <Send size={16} /></button></form><p role="status" aria-live="polite" style={{fontSize:13,color:"#2457a6",minHeight:20}}>{message}</p></div>
    <div className="admin-panel admin-preview"><h2>Public preview</h2><p>This is how the newest browser-local notice appears on the homepage.</p><article className="notice-card"><span className="tag">Browser-local demo notice</span><h3>{notices[0]?.title || title || "Your notice title"}</h3><p className="notice-body">{notices[0]?.body || body || "A short sample announcement will appear here."}</p></article><Link href="/#notices" className="text-link">View public notices <ArrowRight size={16} /></Link></div></div>
    <div className="admin-list"><h2>Sample notices ({notices.length})</h2>{notices.length ? notices.map(notice => <div className="admin-list-row" key={notice.id}><span>{notice.title} <small>· {notice.created}</small></span><button type="button" onClick={() => remove(notice.id)} aria-label={`Remove ${notice.title}`}>Remove</button></div>) : <p style={{fontSize:14,color:"#63788e"}}>Nothing published in this browser yet.</p>}<button className="reset-button" type="button" onClick={reset}><RotateCcw size={14} style={{display:"inline",marginRight:6}} />Reset demo notices</button></div>
  </div></div></section>;
}
