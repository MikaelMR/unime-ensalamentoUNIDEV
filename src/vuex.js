import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store ({
    state: {
        counter: 0
    },
    mutations: {
        decrement: state => state.counter--,
        increment: state => state.counter++
    },
    getters: {
        counter: state => state.counter
    },
    actions: {
        decrement: context => context.commit('decrement'),
        increment: context => context.commit('increment')
    }
})

export { store }
