<template>
  <div class="home">
    <ContainerBox>
      <div v-if="$store.state.userIsConnected">
        <h2>Bienvenue sur l'espace de gestion de la serre, {{ $store.state.login }}.</h2>   
        <img id="logo_serre" alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class ="connection_form" v-else>
        <h2>Connectez-vous !</h2>
        <ConnectionForm></ConnectionForm>
      </div>
    </ContainerBox>
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerBox from '@/components/ContainerBox.vue';
import ConnectionForm from '@/components/ConnectionForm.vue';

import store from '../store';

//requête AJAX vers la route /username de notre serveur pour récupèrer son Identifiant
fetch('http://localhost:3000/username')
//transforme le résultat en JSON
.then(response => response.json())
//enregistre la valeur retournée dans le store vuex
.then(response => store.state.login = response)
//en cas d'erreur on l'affiche dans une alerte du navigateur
.catch(error => alert(error));

export default {
  name: 'HomeView',
  components: {
    ContainerBox,
    ConnectionForm
  }
}
</script>

<style scoped>
  .home{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
  }

  #logo_serre{
    width: 96px;
  }

  /* FORMULAIRE DE CONNEXION */
  .connection_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85%;
  }

  /* RESPONSIVE */
  @media (max-width: 920px) {
    #logo_serre{
      width: 64px;
    }
  }
  @media (max-width: 460px) {
    #logo_serre{
      display: none;
    }
  }
</style>
