import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../components/Home.vue";
 import AboutVue from "../components/About.vue"
 import WhyVue from "../components/Why.vue"
 import Cards from "../components/Cards.vue"

 import LoginVue from "../components/Login.vue"
 import store from "../store/store";
 import RegisterVue from '../components/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "/Home",
      component: HomeVue,
      beforeEnter(from,to,next){
        if(store.getters.checkGet){
          next()
        }else{
          next('/register')
          alert('Please Register')
        }
        
      }
    },
    {
      path: "/about",
      name: "About",
      component: AboutVue,
      beforeEnter(from,to,next){
        if(store.getters.checkGet){
          next()
        }else{
          next('/register')
          alert('Please Register')
        }
        
      }
    },
    {
      path: "/whyus",
      name: "Whyus",
      component: WhyVue,
      beforeEnter(from,to,next){
        if(store.getters.checkGet){
          next()
        }else{
          next('/register')
          alert('Please Register')
        }
        
      }
    },
    {
      path: "/management",
      name: "Management",
      component: Cards,
      beforeEnter(from,to,next){
        if(store.getters.checkGet){
          next()
        }else{
          next('/register')
          alert('Please Register')
        }
        
      }
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterVue,
      // beforeEnter(from,to,next){
      //   if(!store.getters.checkGet){
      //     next('/register')
      //   }else{
      //     next('/register')
        
      //   }
        
      // }
      

    },
    {
      path: "/login",
      name: "Login",
      component: LoginVue,
      
      
    },
  ],
});

export default router;
