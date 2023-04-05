<template>
  <div class="home">
    <ContainerBox>
      <div v-if="$store.state.userIsConnected">
        <h2>Bienvenue sur l'espace de gestion de la serre, {{ $store.state.username }}. 🌱</h2>
        <img id="logo_serre" alt="Vue logo" src="../assets/logo.png">
      </div>
    </ContainerBox>
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerBox from '@/components/ContainerBox.vue';

export default {
  name: 'HomeView',
  mounted() {
    //si l'utilisateur n'est pas connecté
    if(!this.$store.state.userIsConnected){
      //redirige l'utilisateur vers la page de connexion
      this.$router.push('/login');
    }
  },
  components: {
    ContainerBox
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
