import React from "react";
import { useTranslation } from "react-i18next";
import { router } from "@inertiajs/react";

const languages = [
    { code: 'en',label: 'English'},
    { code: 'ne',label: 'Nepali'},
    { code: 'hi',label: 'Hindi'},
];

export default function LanguageSwitcher() {
    const { t,i18n } = useTranslation();
    
    return (
        <div>
            <label>{ t('language') }</label>
                <select>
                    {languages.map((lang) =>(
                    <option key="{lang.code}" value="{lang.code}"></option>
                    ))}
                </select>
        </div>
    
    )
}