import axios from "./axios";

const Artikilaxios = {
    getdata() {
        return axios.get('articles')
    }
}

export default {Artikilaxios}