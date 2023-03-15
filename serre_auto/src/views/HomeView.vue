<template>
  <div class="home">
    <ContainerBox>
      <h2>Bienvenue sur l'espace de gestion de la serre</h2>   
      <img id="logo_serre" alt="Vue logo" src="../assets/logo.png">
    </ContainerBox>
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerBox from '@/components/ContainerBox.vue';

export default {
  name: 'HomeView',
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
