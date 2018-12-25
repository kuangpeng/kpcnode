import Vue from "vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {
    Lazyload
} from 'vant';

import store from './store';

import App from "./App.vue";

import url_config from './config/url';

import map from './router/index';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Lazyload);

const stores = new Vuex.Store(store);

Vue.prototype.$urlConfig = url_config;

let router = new VueRouter({
    routes: map
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!stores.getters.getToken) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next()
        }
    } else {
        next();
    }
});

new Vue({
    store: stores,
    router,
    el: "#app",
    template: "<App/>",
    components: {
        App
    }
});