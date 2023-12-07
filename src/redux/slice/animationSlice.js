import { createSlice } from '@reduxjs/toolkit';
const animationSlice = createSlice({
    name:"animations",
    initialState: {
        animation: ""
    },
    reducers: {
        changeAnimation:(state,action) => {
            const animation = action.payload
            return { animation }
        }
    }
});
export const { changeAnimation } = animationSlice.actions;
export const selectAnimation = state => state.animations.animation;
export default animationSlice.reducer;