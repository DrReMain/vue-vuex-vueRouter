// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise')          // es6 promise
require('isomorphic-fetch')     // fetch

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route-config'
import App from './App'
import store from './vuex/index'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes
})

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
