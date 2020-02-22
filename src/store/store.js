import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        msg: '汕头市潮阳区'
    },
    mutations: {
        change: (state, string) => {
            state.msg = string
        }
    }
})

export default store