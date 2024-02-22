import articlsax from "@/servic/articlsax"
const state = {
    data: null,
    error: null,
    isloading: false
}
const mutations = {
    getarticlstart(state) {
        state.isloading = true
        state.data = null
        state.error = null
    },
    getarticlsuccses(state, payload) {
        state.data = payload
        state.isloading = false
    },
    getarticlfailur() {
        state.isloading = false
    }
}

const actions = {
    articles(contex) {
        return new Promise((resolve, reject ) => {
            contex.commit('getarticlstart')
            articlsax.Artikilaxios.getdata().then((response) => {
                contex.commit('getarticlsuccses', response.data.articles)
                resolve(response.data.articles)
            }).catch(error => contex.commit('getarticlfailur'))
        })
    }
}

export default {state, mutations, actions}