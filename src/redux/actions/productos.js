export const REQUEST_API_VISITOR = 'REQUEST_API_VISITOR';
export const RECEIVE_API_VISITOR = 'RECEIVE_API_VISITOR';

export const REQUEST_API_PRODUCTS = "REQUEST_API_PRODUCTS";
export const RECEIVE_API_PRODUCTS = 'RECEIVE_API_PRODUCTS';

/**
 * Actions: Splash Screen
 */
export const requestVisitor = () => ({
    type: REQUEST_API_VISITOR
});

export const receiveVisitorData = data => ({
    type: RECEIVE_API_VISITOR,
    visitor: data
});

/**
 * Actions: Lista de productos
 */
export const requestApiProducts = (page = 1) => ({
    type: REQUEST_API_PRODUCTS,
    page: page
});

export const receiveApiProducts = data => ({
    type: RECEIVE_API_PRODUCTS,
    products: data
});