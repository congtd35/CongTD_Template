import {useTranslation} from "react-i18next";
import paths from "./paths.js";
import MyLayout from "../layouts/MyLayout.jsx";
import {codes} from "./codes.js";
// Components
import Login from "../screen/Login/Login.jsx";
export default function getRoutes() {
    const { t } = useTranslation();
    return [
        {
            name: t('common.login'),
            path: paths.login,
            exact: true,
            layout: MyLayout,
            component: Login,
            breadcrumb: '',
            code: codes.login,
            redirect: '',
        },
    ]
}