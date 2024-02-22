import Authconstruk from "@/servic/auth"
import { gettertyps } from "./type"
import { removItem } from "@/halpers/persistanslokaclstoge"
const state = {
    user: null,
    errors: null,
    inloged: null,
}

const mutations = {
    startLoading(state) {
        state.user = null
        state.errors = null
        state.inloged = null
    },
    sucsesLoading(state , payload) {
        state.user = payload
        state.inloged = true
    },
    finaliyLoading(state , payload) {
        state.errors = payload.errors
        state.inloged = false
    },
    startLogin(state) {
        state.user = null
        state.errors = null
        state.inloged = null
    },
    sucsesLogin(state , payload) {
        state.user = payload
        state.inloged = true
    },
    finaliyLogin(state , payload) {
        state.errors = payload.errors
        state.inloged = false
    },
    startCurrent(state) {
    },
    sucsesCurrent(state , payload) {
        state.user = payload
        state.inloged = true
    },
    finaliyCurrent(state ) {
        state.user = null
        state.inloged = false
    },
    logaut(state) {
        state.user = null
        state.inloged = false
    }
}
const getters = {
    [gettertyps.currentUser] : state => {
        return state.user
    },
    [gettertyps.inloged] : state => {
        return Boolean(state.inloged)
    },
    [gettertyps.isAnonymous] : state => {
        return state.inloged === false
    },
}

const actions = {
    register( contex, user){
        return new Promise((resolve , reject) => {
            contex.commit('startLoading')
             Authconstruk.register(user).then((response) => {
                    contex.commit('sucsesLoading', response.data.user)
                    window.localStorage.setItem('token', response.data.user.token)
                    resolve(response.data.user)
             }).catch((error) => {
                contex.commit('finaliyLoading', error.response.data)
                reject(error.response.data)
             })
        })
       
    },
    login(contex, user ){
        return new Promise((resolve, reject) => {
            contex.commit('startLogin')
            Authconstruk.login(user).then((response) => {
                contex.commit('sucsesLogin', response.data.user)
                window.localStorage.setItem('token', response.data.user.token)
                resolve(response.data.user)
            }).catch((error) => {
                contex.commit('finaliyLogin', error.response.data)
                reject(error.response.data)
            })
        })
    },
    getUser(contex){
        return new Promise((resolve) => {
            contex.commit('startCurrent')
            Authconstruk.currentUser().then(response => {
                contex.commit('sucsesCurrent', response.data.user)
                resolve(response.data.user)
            }).catch(() => contex.commit('finaliyCurrent'))
        })
    },
    logAut(contex){
        contex.commit('logaut')
        removItem('token')
    }
}

export default {state, mutations, actions, getters}