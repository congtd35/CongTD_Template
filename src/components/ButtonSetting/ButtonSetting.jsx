import React from 'react';
import styled from 'styled-components';
import { SettingFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';

const IconSetting = styled(SettingFilled)`
  font-size: 32px;
  color: #d9d9de;
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
const ButtonSetting = ({ openSetting }) => (
  <Button>
    <IconSetting onClick={openSetting} className="circle" />
  </Button>
);
ButtonSetting.propTypes = {
  openSetting: PropTypes.func,
};
export default ButtonSetting;
