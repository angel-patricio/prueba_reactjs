import { all } from "redux-saga/effects";
import productos from "./productos";

export default function* rootSaga()    {
    yield all([
        productos()
    ]);
}