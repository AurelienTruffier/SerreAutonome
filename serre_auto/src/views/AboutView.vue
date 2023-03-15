<template>
  <div class="about">
    <ContainerBox>
      <h2>This is an about page</h2>
    </ContainerBox>
  </div>
</template>

<script>
import ContainerBox from '@/components/ContainerBox.vue';

export default{
    name: 'AboutView',
    components: {
        ContainerBox
    }
}
</script>

<style scoped>
  .about{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
  }
</style>
