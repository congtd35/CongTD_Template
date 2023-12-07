import styled from "styled-components";
import {SettingFilled} from "@ant-design/icons";
import style from "./ButtonSetting.css";

const IconSetting = styled(SettingFilled)`
  font-size: 32px;
  color: #D9D9DE;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const Button = styled.div`
  background: #00000080;
  position: absolute;
  right: 0;
  top: 50%;
  height: 50px;
  width: 50px;
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonSetting = ({openSetting}) => {
    return <Button>
        <IconSetting onClick={openSetting} className="circle" />
    </Button>
};

export default ButtonSetting;