import { put, call, takeLatest } from "redux-saga/effects";

import {
    receiveVisitorData,
    receiveApiProducts,
    REQUEST_API_PRODUCTS,
    REQUEST_API_VISITOR
} from "../actions/productos";

import { apiCall } from "../../config/api";

/**
 * Implementamos la lógica de la obtención de la visita
 */
function * getVisitor() {
    try {
        // Hacemos la llamada al API
        const data = yield call(apiCall, 'POST', 'https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/visitors');
        yield put(receiveVisitorData(data));
    } catch (e) {
        console.log(e);
    }
}

/**
 * Obtenemos la lista de productos
 */
function * getApiProducts(args = 0) {
    try {
        console.log(args);
        // Hacemos la llamada al API
        const data = yield call(apiCall, 'GET', 'https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io/products?page=' + args.page);
        console.log(data);
        yield put(receiveApiProducts(data));
    } catch (e) {
        console.log(e);
    }
}

/**
 * Watchers
 */
export default function * productos() {
    yield takeLatest(REQUEST_API_VISITOR, getVisitor);
    yield takeLatest(REQUEST_API_PRODUCTS, getApiProducts);
}