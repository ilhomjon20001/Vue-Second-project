import { createStore } from 'vuex'
import auth from '../moduls/auth'
import articilsmod from '@/moduls/articilsmod'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {auth,articilsmod}
})

export default store