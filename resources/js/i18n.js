import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '@lang/en.json';
import hi from '@lang/hi.json';
import ne from '@lang/ne.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
        en : {translation: en},
        hi : {translation: hi},
        ne : {translation: ne},
        },
        lng: "ne",        // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
