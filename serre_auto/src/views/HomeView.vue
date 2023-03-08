<template>
  <div class="home">
    <ContainerBox>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </ContainerBox>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ContainerBox from '@/components/ContainerBox.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ContainerBox
  }
}
</script>

<style>
  .home{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
    }
</style>
