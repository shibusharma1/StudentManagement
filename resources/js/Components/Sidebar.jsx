import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
    const { url } = usePage();
    const lang = localStorage.getItem("lang") || "en";
    const { t } = useTranslation();

    const baseLinkClasses = "block p-2 rounded transition-colors duration-200";
    const activeClasses = "bg-blue-100 text-blue-700 font-semibold";
    const inactiveClasses = "text-gray-700 hover:bg-gray-200";

    return (
        <aside className="w-64 bg-gray-100 p-4 min-h-screen">
            <ul className="space-y-2">
                <li>
                    <Link
                        href={`/students?lang=${lang}`}
                        className={`${baseLinkClasses} ${
                            url.startsWith(`/students`)
                                ? activeClasses
                                : inactiveClasses
                        }`}
                    >
                        {t("students")}
                    </Link>
                </li>

                <li>
                    <Link
                        href={`/teachers?lang=${lang}`}
                        className={`${baseLinkClasses} ${
                            url.startsWith(`/teachers`)
                                ? activeClasses
                                : inactiveClasses
                        }`}
                    >
                        {t("teachers")}
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
