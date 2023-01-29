import {createStore} from 'vuex'
import axios from 'axios'
import router from '../router';
const store = createStore({
    namespaced : true,
    state:{
        idToken: '',
        returnSecureToken: ''

    },
    getters:{
        checkGet(state){
            return state.idToken !== '';
        }
    },
    mutations:{
        idTokenUptade(state,payload){
            state.idToken = payload

        },
        checkToken(state){
            let token = localStorage.getItem('token');
            if(token){
                state.idToken = token;
            }
        },
        logoutUser(state){
            localStorage.removeItem('token');
            state.idToken = '';
            router.replace('/login')
            
        },
        loginToken(state,payload){
            state.idToken = payload
            
        }
    },
    actions:{
        async registerUser({commit},payload){
            let key = 'AIzaSyBN7QhdVT_ezr67Q7puGpwU25nQZo1kvNY'
            let firebase ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
            let {data} = await axios.post(firebase+key, {
               email : payload.mail, password : payload.password, returnSecureToken : true
            });
             
             commit('idTokenUptade',data.idToken);
             localStorage.setItem('token',data.idToken);
             router.replace('/')

           },
          async loginUser({commit},payload){
            let key = 'AIzaSyBN7QhdVT_ezr67Q7puGpwU25nQZo1kvNY';
            let firebase1 = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
            let {data} = await axios.post(firebase1+key,{
                email : payload.mail, password : payload.password, returnSecureToken : true
            }) ;
            commit ('loginToken',data.idToken);
            localStorage.setItem('token',data.idToken);
            router.replace('/')
           
          
           }
    }
})
export default store