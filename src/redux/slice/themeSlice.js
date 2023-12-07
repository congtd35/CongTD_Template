import { createSlice } from '@reduxjs/toolkit';
import themes from '../../themes/themes';

const themeSlice = createSlice({
    name:"themes",
    initialState: {
        theme: themes.light
    },
    reducers: {
        changeTheme:(state,action) => {
            const theme = action.payload;
            return {
                theme
            }
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = state => state.themes.theme;

export default themeSlice.reducer;