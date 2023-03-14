<template>
  <NavBar>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </NavBar>
  <main>
    <router-view/>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
#app {
  width: 100vw;
  height: 100vh;
  background-image: url('assets/markus-spiske-bk11wZwb9F4-unsplash.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 64px);
}

nav {
  padding: 8px;
}

nav a {
  margin: 0 32px;
  font-size: 2.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #4ab435;
}

nav a.router-link-exact-active {
  color: #3b660a;
  text-decoration: underline;
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
