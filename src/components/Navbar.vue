<script setup>
import { RouterLink } from "vue-router";
import { mapGetters } from "vuex";
</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MOJJ</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link"  to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/whyus">Why Us</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/management"
                >Management</RouterLink
              >
            </li>
         
            <li class="nav-item">
              <RouterLink class="nav-link" to="/login" v-if="!checkGet">Login</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="" v-if="checkGet" @click="logout">Logout</a>
            </li>
            <li>
              <RouterLink class="nav-link" to="/register" v-show="!checkGet">Register</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed:{
    ...mapGetters(['checkGet'])
  },
  methods:{
    logout(){
      this.$store.commit('logoutUser')
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap");

.navbar-nav a {
  font-size: 17px;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  font-family: "Oswald";
margin-left: 60px;
 
}
.navbar-nav a:hover {
  color: #a460f9;
}
.navbar {
  background-color: #181818 !important;
}
#navbarNav{
 display: flex ;
justify-content: space-around;
align-items: center;



}
@media screen and (min-width:768px) and (max-width:1130px) {

}

</style>