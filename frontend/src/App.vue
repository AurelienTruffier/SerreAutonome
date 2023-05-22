<template>
  <NavBar>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">Utilisation</router-link>
  </NavBar>
  <main>
    <router-view/>
  </main>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  document.title = 'Gestion de la serre';

  export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
#app {
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: url('assets/markus-spiske-bk11wZwb9F4-unsplash.jpg');
  /* background-image: url('assets/shrek.jpeg'); */
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #273616;
}

main{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 64px);
  height: calc(auto - 64px);
}

/* BARRE DE NAVIGATION  */
nav a {
  margin: 0 32px;
  font-size: 2.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #327F22;
}

nav a.router-link-exact-active {
  color: #2b4b07;
  text-decoration: underline;
}

/* RESPONSIVE */
@media (max-width: 920px) {
  /* BARRE DE NAVIGATION */
  nav a{
    margin: 0 16px;
    font-size: 1.9rem;
  }
}
@media (max-width: 460px) {
  /* BARRE DE NAVIGATION */
  nav a{
    margin: 0 16px;
    font-size: 1.25rem;
  }
}
@media (max-width: 360px) {
  /* BARRE DE NAVIGATION */
  nav a{
    margin: 0 8px;
    font-size: 1rem;
  }
}

</style>
