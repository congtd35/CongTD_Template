import { createSlice } from '@reduxjs/toolkit';
import backgrounds from '../../backgrounds/backgrounds';

const backgroundSlice = createSlice({
    name:"backgrounds",
    initialState: {
        background: backgrounds.red
    },
    reducers: {
        changeBackground:(state,action) => {
            const background = action.payload
            return { background }
        }
    }
});

export const { changeBackground } = backgroundSlice.actions;

export const selectBackground = state => state.backgrounds.background;

export default backgroundSlice.reducer;