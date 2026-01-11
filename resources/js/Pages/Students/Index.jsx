import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Index() {
    const { students, search: initailSearch } = usePage().props;
    const { t, i18n } = useTranslation();

    const [search, setSearch] = useState(initailSearch || "");
    const handleSearch = (e) => {
        e.preventDefault();

        router.get(
            "students",
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    // New Links pagigination
    const handlePageChange = (url) => {
        if (url) router.visit(url);
    };

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

                {/* <section className="space-y-4">
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
                </section> */}
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder={t("Search Students")}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">{t("Search")}</button>
                </form>
                <div className="overflow-x-auto bg-white rounded shadow p-4">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700 p-5">
                                <th scope="col" className="p-2">
                                    #
                                </th>
                                <th scope="col" className="p-2">
                                    Name
                                </th>
                                <th scope="col" className="p-2">
                                    Email
                                </th>
                                <th scope="col" className="p-2">
                                    Gender
                                </th>
                                <th scope="col" className="p-2">
                                    Score
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.data.map((student, index) => (
                                <tr key={String(student.id)}>
                                    <td className="p-2">{index + 1}</td>
                                    <td className="p-2">{student.name}</td>
                                    <td className="p-2">{student.email}</td>
                                    <td className="p-2">{student.gender}</td>
                                    <td className="p-2">{student.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <div>
                        {students.links.map((link, idx)=>(
                            <button
                            key={idx}
                            onClick={()=> handlePageChange(link.url)}
                            disabled={!link.url}
                            className={`px-3 py-1 rounded`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div> */}
                    {/* chatgpt pagigination */}
                    <div className="mt-4 flex justify-end">
                        <div className="flex flex-wrap gap-1">
                            {students.links.map((link, idx) => (
                                <button
                                    key={link.label ?? idx}
                                    onClick={() =>
                                        link.url && handlePageChange(link.url)
                                    }
                                    disabled={!link.url}
                                    className={`
                    px-3 py-1 rounded text-sm border
                    ${
                        link.active
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700"
                    }
                    ${
                        !link.url
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100"
                    }
                `}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
