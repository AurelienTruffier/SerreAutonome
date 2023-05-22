<template>
  <div class="home">
    <ContainerBox>
      <div id="main_container" v-if="$store.state.userIsConnected">
        <div id="header_container">
          <h2>Bienvenue sur l'espace de gestion de la serre, {{ $store.state.username }}.</h2>
          <img id="logo_serre" alt="Vue logo" src="../assets/logo.png">
        </div>
        <div id="button_container">
          <HomeButton title="Tableau de bord 💻" link="#"></HomeButton>
          <HomeButton title="Mes graphiques 📉" link="/charts"></HomeButton>
          <HomeButton title="Contrôler ma serre 🌱" link="#"></HomeButton>
          <HomeButton title="Configuration ⚙️" link="#"></HomeButton>
        </div>
      </div>
    </ContainerBox>
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerBox from '@/components/ContainerBox.vue';
import HomeButton from '@/components/HomeButton.vue';

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
    ContainerBox,
    HomeButton
  }
}
</script>

<style scoped>
  .home{
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
      padding: 12px;
  }

  #main_container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #header_container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2{
    font-size: 2.1rem;
    color: #273616;
    margin: 8px;
  }

  #logo_serre{
    display: block;
    width: 96px;
  }

  #button_container{
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 24px 0;
  }

  /* RESPONSIVE */
  @media (max-width: 920px) {
    #main_container{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    h2{
      font-size: 1.9rem;
    }
    #logo_serre{
      width: 64px;
    }
    #button_container{
      padding: 12px 0;
    }
  }
  @media (max-width: 460px) {
    h2{
      font-size: 1.2rem;
    }
    #logo_serre{
      display: none;
    }
  }
</style>
