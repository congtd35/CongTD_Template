import { all } from "redux-saga/effects";

// Theme
import { watchTheme } from "./themeSaga";

//Background
import { watchBackground } from "./backgroundSaga";

// Animation
import { watchChangeAnimation } from "./animationSaga";

export default function* rootSaga() {
    yield all([
        watchTheme(),
        watchBackground(),
        watchChangeAnimation()
    ]);
};