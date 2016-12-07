import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import actions from './actions/index'
import mutations from './mutations/index'
import * as getters from './getters/index'

Vue.use(Vuex)

const state = {
    count: 0,
    pageDate: {}
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    plugins: process.env.NODE_ENV !== 'pro'
        ? [createLogger()]
        : []
})