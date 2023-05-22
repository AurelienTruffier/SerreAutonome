<template>
    <div class="login">
      <ContainerBox>
        <div class ="connection_form">
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
  
  export default {
    name: 'HomeView',
    components: {
      ContainerBox,
      ConnectionForm
    }
  }
  </script>
  
  <style scoped>
    .login{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        padding: 12px;
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