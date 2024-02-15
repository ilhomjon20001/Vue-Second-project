import Authconstruk from "@/servic/auth"

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
        state.isloading = false
        state.user = payload
        state.inloged = true
    },
    finaliyLoading(state , payload) {
        state.isloading = false
        state.errors = payload.errors
        state.inloged = false
    }
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
            contex.commit('startLoading')
            Authconstruk.login(user).then((response) => {
                contex.commit('sucsesLoading', response.data.user)
                window.localStorage.setItem('token', response.data.user.token)
                resolve(response.data.user)
            }).catch((error) => {
                contex.commit('finaliyLoading', error.response.data)
                reject(error.response.data)
            })
        })
    },
    getuser(contex, ){
        return new Promise((resolve, reject) => {
            contex.commit('startLoading')
            Authconstruk.getuser().then(response => {
                contex.commit('sucsesLoading', response.data.user)
                resolve(response.data.user)
            }).catch((error) => {
                contex.commit('finaliyLoading', error.response.data)
            })
        })
    }
}

export default {state, mutations, actions}