import axios from "./axios";

const Authconstruk = {
     register(user){
       return axios.post('/users', {user})
     },
     login(user){
      return axios.post('/users/login', {user})
     },
     currentUser(){
      return axios.get('/user')
     }
}
export default Authconstruk