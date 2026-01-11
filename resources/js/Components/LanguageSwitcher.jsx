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

    const changeLanguage = (e) => {
        const selectedLang = e.target.value;
        i18n.changeLanguage(selectedLang);
    }
    
    return (
        <div>
            <label>{ t('language') }</label>
                <select onChange={changeLanguage} value={i18n.language}>
                    {languages.map((lang) =>(
                    <option key={lang.code} value={lang.code}>{lang.label}</option>
                    ))}
                </select>
        </div>
    
    )
}