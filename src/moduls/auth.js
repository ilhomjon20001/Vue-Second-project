import Authconstruk from "@/servic/auth"

const state = {
    isloading: false,
    user: null,
    error: null
}

const mutations = {
    startLoading() {
        state.isloading = true
        
    },
    sucsesLoading(state , payload) {
        state.isloading = false
        state.user = payload
    },
    finaliyLoading(state , payload) {
        state.isloading = false
        state.error = payload
    }
}

const actions = {
    register( contex, user){
        return new Promise((resolve) => {
            contex.commit('startLoading')
             Authconstruk.register(user).then((response) => {
                    contex.commit('sucsesLoading', response.data.user)
             }).catch((error) => {
                contex.commit('finaliyLoading', error.response.data)
             })
        })
       
        console.log(contex);
    }
}

export default {state, mutations,actions}