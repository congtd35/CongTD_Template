import { put, takeEvery } from "redux-saga/effects";

import TYPE_ACTION from "../constants/TypeActions";

//Slice
import { changeTheme } from "../redux/slice/themeSlice";

// Worker
function* doChangeTheme(action) {
    const theme = action.payload;
    try {
        yield put(changeTheme(theme));
    } catch (error) {
        console.log("Cant change theme:",error);
    }
};

// Watcher
function* watchTheme() {
    yield takeEvery(TYPE_ACTION.THEME.CHANGE_THEM,doChangeTheme)
};

export {
    watchTheme
};