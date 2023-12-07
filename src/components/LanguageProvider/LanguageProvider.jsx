import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import i18next from "i18next";
import {makeSelectLocale} from "./selectors";
import {changeLocale} from "./actions";
import {Flag, IconStyled, LanguageContainer} from "./styles";
import flagVN from "../../assets/icons/flag_vietnamese.png";
import flagEN from "../../assets/icons/flag_en.png";
import {Dropdown} from "antd";

const items = [
    {
        label: 'Tiếng Việt',
        key: 'vi',
        icon: <IconStyled alt="flag" src={flagVN} />,
    },
    {
        label: 'English',
        key: 'en',
        icon: <IconStyled alt="flag" src={flagEN} />,
    },
];

export function setLangLocalStorage(lang) {
    window.localStorage.setItem(LANG, lang);
}
const LANG = "lang";
export function getLangLocalStorage() {
    return window.localStorage.getItem(LANG);
}
function LanguageProvider() {
    const dispatch = useDispatch();
    const locale = useSelector(makeSelectLocale());
    const [lang, setLang] = useState(locale);
    const onChangLanguage = (value) => {
        setLang(value.key);
        i18next.changeLanguage(value.key, (err, t) => {
            if (err) return console.log("something went wrong loading", err);
            t("key");
        });
        setLangLocalStorage(value.key);
        dispatch(changeLocale(value.key));
    };
    const menuProps = {
        items,
        onClick: onChangLanguage,
    };
    useEffect(() => {
        setLang(locale);
        const localStorageLanguage = getLangLocalStorage();
        dispatch(changeLocale(localStorageLanguage ? localStorageLanguage : "vn"));
    }, [locale]);
    return <LanguageContainer>
        <Dropdown
            menu={menuProps}
            trigger={['click']}
            placement="bottom"
            overlayClassName="stylesDropdownLanguage"
        >
                <Flag>
                     <IconStyled src={lang === "en" ? flagEN : flagVN} />
                </Flag>
        </Dropdown>
    </LanguageContainer>
}

export default LanguageProvider;
