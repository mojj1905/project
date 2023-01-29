<script setup>
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
import { RouterLink } from "vue-router";
import { mapGetters } from "vuex";
</script>
<template>
  <div>
    <NavbarVue/>
    <RouterView/>
    <!-- <HomeVue/>
    <AboutVue/>
    <WhyVue/>
    <CardsVue/> -->
    <!-- <SubscribeVue/> -->
    
    <FooterVue/>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit('checkToken')
  }
  
};
</script>

<style scoped></style>
