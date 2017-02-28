// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router';

// import some global styles
import './styles/style.scss';

new Vue({
    el: '#app',
    render: h => h(App)
});
