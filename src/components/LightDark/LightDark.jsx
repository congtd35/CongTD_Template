import {useTranslation} from "react-i18next";
import {SwitchLightDark} from "./LightDarkStyled";
import {useDispatch} from "react-redux";
import TYPE_ACTION from "../../constants/TypeActions";
import themes from "../../themes/themes";

const LightDark = () => {

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const handleChangeTheme = value => {
        dispatch({
            type: TYPE_ACTION.THEME.CHANGE_THEM,
            payload: value ? themes.light : themes.dark
        })
    }
    return <SwitchLightDark
        size="default"
        checkedChildren={t("layout.lightDark.light")}
        unCheckedChildren={t("layout.lightDark.dark")}
        defaultChecked
        onChange={handleChangeTheme}
    />
};

export default LightDark;