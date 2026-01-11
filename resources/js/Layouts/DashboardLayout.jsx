import { React, useState } from "react";
import Sidebar from "@/Components/Sidebar";
import LanguageSwitcher from "@/Components/LanguageSwitcher";

export default function DashboardLayout({ children }) {
    const [mountedAt] = useState(new Date().toLocaleTimeString());
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 row">
                <header className="bg-white shadow p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    Topbar (Mounted At: {mountedAt})
                    <LanguageSwitcher />
                </header>
                <section className="p-4">{children}</section>
            </main>
        </div>
    );
}
