import { put, takeEvery } from "redux-saga/effects";

import TYPE_ACTION from "../constants/TypeActions";

// Slice
import { changeAnimation } from "../redux/slice/animationSlice";

// Worker
function* doChangeAnimation(action) {
    const animation = action.payload;
    try {
        yield put(changeAnimation(animation));
    } catch (error) {
        console.log("Cant change animation:", error);
    }
}

// Watcher
function* watchChangeAnimation(){
    yield takeEvery(TYPE_ACTION.ANIMATION.CHANGE_ANIMATION,doChangeAnimation);
}

export {
    watchChangeAnimation
};