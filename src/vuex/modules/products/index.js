import * as getters from './getters';
import * as actions from './actions';

// Import Mutation Types.
import {
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './mutation-types'

// initial state
const initialState = {
    all: [
        {
            id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
            name: 'COBOL 101 vintage',
            description: 'Learn COBOL with this vintage programming book',
            price: 399,
        },
        {
            id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
            name: 'Sharp C2719 curved TV',
            description: 'Watch TV like never before with the brand new curved screen technology',
            price: 1995,
        },
        {
            id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
            name: 'Remmington X mechanical keyboard',
            description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
            'features tactile, clicky switches for speed and accuracy',
            price: 595,
        }
    ]
};

// mutations
const mutations = {
    // Create a new Product.
    [CREATE_PRODUCT] (state, product) {
        state.all.push(product);
    },

    // Update the Product.
    [UPDATE_PRODUCT] (state, product) {
        const index = state.all.findIndex((p) => p.id === product.id);

        if (index !== -1) {
            // We need to replace the array entirely so that vue can recognize
            // the change and re-render entirely.
            // See http://vuejs.org/guide/list.html#Caveats
            state.all.splice(index, 1, product)
        }
    },

    // Delete the Product.
    [DELETE_PRODUCT] (state, productId) {
        // Find Index of Product.
        const index = state.all.findIndex(product => product.id === productId);

        // Remove Product from all.
        state.all.splice(index, 1);
    }
};

export default {
    state: { ...initialState },
    actions,
    getters,
    mutations
}
