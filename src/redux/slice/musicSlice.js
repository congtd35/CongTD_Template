import { createSlice } from '@reduxjs/toolkit';
import MerryChristmas from '../../assets/audios/Last_Christmas_Remix.mp3';

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    isPlay: false,
    current: MerryChristmas,
    list: [],
  },
  reducers: {
    changePlaying: (state, action) => {
      const isPlay = action.payload;
      return { isPlay };
    },
    changeCurrent: (state, action) => {
      const current = action.payload;
      return { current };
    },
    getList: (state, action) => {
      const list = action.payload;
      return { list };
    },
  },
});

export const { changePlaying, changeCurrent, getList } = musicSlice.actions;

export const selectMusics = state => state.musics;

export default musicSlice.reducer;