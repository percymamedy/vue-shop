import uuid from 'uuid';

import {
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT
} from './mutation-types';

/**
 * Save a Product.
 *
 * @param commit
 * @param state
 * @param product
 */
export function saveProduct({ commit, state }, product) {
    const index = state.all.findIndex((p) => p.id === product.id);

    // update product if it exists or create it if it doesn't
    if (index !== -1) {
        commit(UPDATE_PRODUCT, product)
    } else {
        product.id = uuid.v4();
        commit(CREATE_PRODUCT, product)
    }
}

/**
 * Deletes a Product.
 *
 * @param commit
 * @param productId
 */
export function deleteProduct ({ commit }, productId) {
    commit(DELETE_PRODUCT, productId)
}
