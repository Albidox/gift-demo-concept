"use client";

import { useSyncExternalStore } from "react";

export type DemoNotice = { id: string; title: string; body: string; created: string };
export const noticeKey = "gift-demo-notices-v1";
export const noticeEvent = "gift-demo-notices-change";

function parseNotices(raw: string): DemoNotice[] {
  try {
    const value = JSON.parse(raw);
    return Array.isArray(value) ? value.filter(item => typeof item.id === "string" && typeof item.title === "string" && typeof item.body === "string" && typeof item.created === "string") : [];
  } catch { return []; }
}

function subscribe(callback: () => void) {
  window.addEventListener(noticeEvent, callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener(noticeEvent, callback); window.removeEventListener("storage", callback); };
}

export function useNotices() {
  const raw = useSyncExternalStore(subscribe, () => localStorage.getItem(noticeKey) || "[]", () => "[]");
  return parseNotices(raw);
}

export function saveNotices(notices: DemoNotice[]) {
  localStorage.setItem(noticeKey, JSON.stringify(notices));
  window.dispatchEvent(new Event(noticeEvent));
}
