<template>
  <NavBar>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </NavBar>
  
  <router-view/>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-image: url('assets/markus-spiske-bk11wZwb9F4-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 8px;
}

nav a {
  margin: 0 24px;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #5A8BF5;
}

nav a.router-link-exact-active {
  color: #5A8BF5;
}

</style>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
  name: 'App',
  components: {
    NavBar
  }
}

</script>
