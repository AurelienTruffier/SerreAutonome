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
          <AirHumidityChart v-if="this.selected=='air_humidity'"></AirHumidityChart>
          <GroundHumidityChart v-if="this.selected=='ground_humidity'"></GroundHumidityChart>
          <BrightnessChart v-if="this.selected=='brightness'"></BrightnessChart>
        </div>
      </div>
      <ClassicButton title="Historique des données" link="#" width="180px"></ClassicButton>
    </ContainerBox>
  </div>
</template>

<script>
import ContainerBox from '@/components/ContainerBox.vue';
import ClassicButton from '@/components/ClassicButton.vue';
import TemperatureChart from '@/components/Charts/TemperatureChart.vue';
import AirHumidityChart from '@/components/Charts/AirHumidityChart.vue';
import GroundHumidityChart from '@/components/Charts/GroundHumidityChart.vue';
import BrightnessChart from '@/components/Charts/BrightnessChart.vue';
import ChartButtonsContainer from '@/components/Charts/ChartButtonsContainer.vue';

export default{
    name: 'ChartsView',
    components: {
        ContainerBox,
        ClassicButton,
        TemperatureChart,
        AirHumidityChart,
        GroundHumidityChart,
        BrightnessChart,
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
    justify-content: space-evenly;
    align-items: center;
    padding-top: 8px;
  }

  .charts #main_container .chart_container{
      margin-bottom: 8px;
    }

  @media (max-width: 700px){
    .charts #main_container{
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }
  }
</style>
