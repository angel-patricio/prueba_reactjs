import { RECEIVE_API_PRODUCTS, RECEIVE_API_VISITOR } from '../actions/productos';

export const reducers = (state = {}, action) => {
    const newState = { ...state };

    switch (action.type) {
        case RECEIVE_API_PRODUCTS:
            newState.products = action.products;
        break;

        case RECEIVE_API_VISITOR:
            newState.visitor = action.visitor;
        break;

        default:
            return newState;
    }

    return newState;
};