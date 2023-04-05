<template>
  <NavBar>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">Utilisation</router-link>
    <router-link to="/private" v-if="$store.state.userIsConnected">Privée</router-link>
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
  color: #273616;
}

main{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 64px);
}

h2{
    font-size: 2.1rem;
    color: #273616;
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
  h2{
    font-size: 1.9rem;
  }
  /* BARRE DE NAVIGATION */
  nav a{
    margin: 0 16px;
    font-size: 1.9rem;
  }
}
@media (max-width: 460px) {
  h2{
    font-size: 1.6rem;
  }
  /* BARRE DE NAVIGATION */
  nav a{
    margin: 0 16px;
    font-size: 1.8rem;
  }
}
@media (max-width: 360px) {
  h2{
    font-size: 1.3rem;
  }
  /* BARRE DE NAVIGATION */
  nav a{
    margin: 0 12px;
    font-size: 1.3rem;
  }
}

</style>
