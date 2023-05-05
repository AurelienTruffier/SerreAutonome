<template>
  <div class="charts">
    <ContainerBox>
      <h2>Voici vos différents graphiques {{ $store.state.username }}.</h2>
      <div id="main_container">
        <div class="buttons_container">
          <ChartButtonsContainer @NewSelected="ChangeChart"></ChartButtonsContainer>
        </div>
        <div class="chart_container">
          <TemperatureChart v-if="this.selected=='temperature'"></TemperatureChart>
        </div>
      </div>
    </ContainerBox>
  </div>
</template>

<script>
import ContainerBox from '@/components/ContainerBox.vue';
import TemperatureChart from '@/components/TemperatureChart.vue';
import ChartButtonsContainer from '@/components/ChartButtonsContainer.vue';

export default{
    name: 'ChartsView',
    components: {
        ContainerBox,
        TemperatureChart,
        ChartButtonsContainer
    },
    data(){
      return{
        selected: 'temperature' //temperature par défaut
      }
    },
    methods:{
      ChangeChart(data){
        this.selected= data;
        console.log(data);
      }
    }
}
</script>

<style scoped>
  .charts{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
  }

  .charts #main_container{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 8px;
  }
</style>
