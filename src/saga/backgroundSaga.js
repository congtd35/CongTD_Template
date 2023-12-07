import { put, takeEvery } from "redux-saga/effects";

import TYPE_ACTION from "../constants/TypeActions";

// Slice
import { changeBackground } from "../redux/slice/backgroundSlice";

// Worker
function* doChangeBackground(action) {
    const background = action.payload;
    try {
        yield put(changeBackground(background));
    } catch (error) {
        console.log("Cant change background:", error);
    }
};

// Watcher
function* watchBackground(){
    yield takeEvery(TYPE_ACTION.BACKGROUND.CHANGE_BACKGROUND,doChangeBackground);
};

export {
    watchBackground
};