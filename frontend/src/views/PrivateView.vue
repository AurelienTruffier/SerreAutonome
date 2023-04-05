<template>
  <div class="private">
    <ContainerBox>
      <h2>Ceci est une page privée {{ $store.state.username }}.</h2>
    </ContainerBox>
  </div>
</template>

<script>
import ContainerBox from '@/components/ContainerBox.vue';

export default{
    name: 'PrivateView',
    components: {
        ContainerBox
    }
}
</script>

<style scoped>
  .private{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
  }
</style>
