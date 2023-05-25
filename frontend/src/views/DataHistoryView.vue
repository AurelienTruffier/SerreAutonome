<template>
    <div class="data_history">
      <ContainerBox>
        <h2>Historique des données</h2>
        <div class="tab_container">
          <TemperatureTable></TemperatureTable>
          <AirHumidityTable></AirHumidityTable>
          <GroundHumidityTable></GroundHumidityTable>
          <BrightnessTable></BrightnessTable>
        </div>
      </ContainerBox>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ContainerBox from '@/components/ContainerBox.vue';
  import TemperatureTable from '@/components/DataHistory/TemperatureTable.vue';
  import AirHumidityTable from '@/components/DataHistory/AirHumidityTable.vue';
  import GroundHumidityTable from '@/components/DataHistory/GroundHumidityTable.vue';
  import BrightnessTable from '@/components/DataHistory/BrightnessTable.vue';
  
  export default {
    name: 'DataHistoryView',
    components: {
      ContainerBox,
      TemperatureTable,
      AirHumidityTable,
      GroundHumidityTable,
      BrightnessTable
    }
  }
  </script>
  
  <style scoped>
    .data_history{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        padding: 12px;
    }

    .tab_container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      padding: 8px;
    }
  </style>