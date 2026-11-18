import type { Metadata } from "next";
import { AdminPreview } from "@/components/admin-preview";

export const metadata: Metadata = { title: "Simulated Admin Preview" };

export default function AdminPage() { return <AdminPreview />; }
