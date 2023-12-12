import React from 'react';
import styled from 'styled-components';
import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectMusics } from '../../redux/slice/musicSlice.js';

const IconMusicPlay = styled(PlayCircleFilled)`
    font-size: 32px;
    color: #002a6f;
    cursor: pointer;

    :hover {
        color: black;
    }
`;
const IconMusicPause = styled(PauseCircleFilled)`
    font-size: 32px;
    color: #002a6f;
    cursor: pointer;

    :hover {
        color: black;
    }
`;
const Button = styled.div`
    background: #00000080;
    position: absolute;
    right: 0;
    top: 70%;
    height: 50px;
    width: 50px;
    border-bottom-left-radius: 24px;
    border-top-left-radius: 24px;
    padding-right: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const ButtonMusic = ({ openSetting }) => {
  const selectMusic = useSelector(selectMusics);
  return <Button>
    {selectMusic.isPlaying ? <IconMusicPause onClick={openSetting} className='circle' /> :
      <IconMusicPlay onClick={openSetting} className='circle' />}
  </Button>;
};
ButtonMusic.propTypes = {
  openSetting: PropTypes.func,
};
export default ButtonMusic;