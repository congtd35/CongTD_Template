import {AvatarStyled} from "./AvatarUserStyled";
import { Dropdown } from "antd";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import paths from "../../constants/paths";

const AvatarUser = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const logout = () => {
        navigate(paths.login);
    };
    const items = [
        {
            key: "userInfo",
            label: t("layout.userInfo")
        },
        {
            key: "logout",
            label: <div onClick={logout}>{t("layout.logout")}</div>
        },
    ];
    return <Dropdown
        menu={{
            items,
        }}
    >
        <AvatarStyled
            size={50}
            src="https://imgs.search.brave.com/Fjv77abduqUFPu1Hiqd6U8G2VftxrW7xwfAb6xWfitc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90YWlt/aWVucGhpLnZuL3Rt/cC9jZi9hdXQvYW5o/LWdhaS14aW5oLTEu/anBn"
        />
    </Dropdown>
};

export default AvatarUser;