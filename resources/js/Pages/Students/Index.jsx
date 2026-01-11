import React from "react";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Index() {
    const { Name, Position } = usePage().props;
    const { t, i18n } = useTranslation();

    return (
        <DashboardLayout>
            <main className="flex-1 p-6">
                <header className="mb-6 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {t("students_page")}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {t("students_welcome")}
                    </p>
                </header>

                <section className="space-y-4">
                    <div className="bg-white p-6 rounded shadow">
                        <p className="text-gray-700">
                            {t("students_description")}
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded shadow text-sm text-gray-600">
                        <p>
                            <strong>{t("name")} : </strong>{Name}
                        </p>
                        <p>
                            <strong>{t("position")} : </strong>{Position}
                        </p>
                    </div>
                </section>
            </main>
        </DashboardLayout>
    );
}
