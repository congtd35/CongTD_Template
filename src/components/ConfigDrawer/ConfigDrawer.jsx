import {Drawer} from "antd";
import React from "react";
import {useTranslation} from "react-i18next";
import {Header, SelectAnimation} from "./ConfigDrawerStyled";
import {animationsConstants} from "../../constants/animationConstants";
import {useDispatch, useSelector} from "react-redux";
import {selectAnimation} from "../../redux/slice/animationSlice";
import TYPE_ACTION from "../../constants/TypeActions";


const ConfigDrawer = ({isOpen,onClose}) => {
    const {t} = useTranslation();
    const animation = useSelector(selectAnimation);
    const dispatch = useDispatch();
    const options = [
        {
            label: t("config.selectAnimation.disable"),
            value: ""
        },
        {
            label: t("config.selectAnimation.snow"),
            value: animationsConstants.snow
        }
    ];
    const onChange = value => {
        dispatch({
            type: TYPE_ACTION.ANIMATION.CHANGE_ANIMATION,
            payload: value
        })
    };
    return <Drawer title={t("config.title")} placement="right" onClose={onClose} open={isOpen}>
        <Header>{t("config.animation")}</Header>
        <SelectAnimation
            options={options}
            defaultValue={animation}
            onChange={onChange}
        />
    </Drawer>
};

export default ConfigDrawer;