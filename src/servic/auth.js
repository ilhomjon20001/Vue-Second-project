import axios from "./axios";

const Authconstruk = {
     register(user){
       return axios.post('/users', {user})
     }
}
export default Authconstruk