import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Drawer } from 'antd';
import PropTypes from 'prop-types';
import { Container } from './styles.js';
import { useSelector } from 'react-redux';
import { selectMusics } from '../../redux/slice/musicSlice.js';

const MusicDrawer = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const selectMusic = useSelector(selectMusics);
  const [player, setPlayer] = useState(undefined);
  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken:
          cb => {
            cb('BQDc8vgygo-4hpK9cnUYV3nkhjltYxkbT9G27zrV_70prGMEI-6xeNyBkyPssqWKirAmnSBhHccDSJA06VWwFmYrOwzxLv1LIW4ol4HwBXJmHZC19vo');
          },
        volume: 0.5,
      });
      setPlayer(player);
      console.log('player', player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
      player.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });
      player.getCurrentState().then(state => {
        if (!state) {
          console.log('User is not playing music through the Web Playback SDK');
          return;
        }
        var current_track = state.track_window.current_track;
        var next_track = state.track_window.next_tracks[0];

        console.log('Currently Playing', current_track);
        console.log('Playing Next', next_track);
      });
    };
  }, []);
  return <Drawer width={400} title={t('config.title')} placement='right' onClose={onClose} open={isOpen}>
    <Container>
      <audio src={selectMusic.current} controls />
      <Button onClick={() => player.togglePlay()}>Start</Button>
    </Container>
  </Drawer>;
};
MusicDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default MusicDrawer;