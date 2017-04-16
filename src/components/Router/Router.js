// Import Vue Router.
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Components.
import ManageProducts from '../ManageProducts.vue';
import ProductCatalog from '../ProductCatalog.vue';

Vue.use(VueRouter);

class Router {
    routes = [
        {path: '/home', alias: '/', component: ProductCatalog},
        {path: '/manage-products', component: ManageProducts}
    ];

    /**
     * Load Routes.
     *
     * @returns {VueRouter}
     */
    load() {
        let routes = this.routes;

        return new VueRouter({
            mode: 'history',
            routes
        });
    }
}

export default new Router().load();
