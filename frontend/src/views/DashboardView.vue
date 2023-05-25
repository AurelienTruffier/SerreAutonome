<template>
    <div class="dashboard">
      <ContainerBox>
        <h2>Tableau de bord</h2>
        <div id="top_container">
          <BatteryLevel></BatteryLevel>
          <p v-if="dataFetched">Dernière mise à jour des données: 
            {{ this.formattedLastUpdate }}
          </p>
        </div>
        <div id="main_container">
          <TemperatureGauge></TemperatureGauge>
          <AirHumidityGauge></AirHumidityGauge>
          <GroundHumidityGauge></GroundHumidityGauge>
          <BrightnessGauge></BrightnessGauge>
        </div>
      </ContainerBox>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ContainerBox from '@/components/ContainerBox.vue';
  import BatteryLevel from '@/components/BatteryLevel.vue';
  import TemperatureGauge from '@/components/Gauges/TemperatureGauge.vue';
  import AirHumidityGauge from '@/components/Gauges/AirHumidityGauge.vue';
  import GroundHumidityGauge from '@/components/Gauges/GroundHumidityGauge.vue';
  import BrightnessGauge from '@/components/Gauges/BrightnessGauge.vue';
  
  export default {
    name: 'DashboardView',
    components: {
      ContainerBox,
      BatteryLevel,
      TemperatureGauge,
      AirHumidityGauge,
      GroundHumidityGauge,
      BrightnessGauge
    },
    mounted(){
      this.FetchData();
    },
    data(){
        return{
            dataFetched: false,
            lastUpdate: null,
            formattedLastUpdate: null
        }
    },
    methods: {
      FormatDate(date){
        let dateDay = null, dateMonth = null, dateYear = null, dateHour = null, dateMinute = null;
        
        if (date.getDate() < 10){
          dateDay = "0" + date.getDate();
        }
        else
        {
          dateDay = date.getDate();
        }
        if (date.getMonth() < 10){
          dateMonth = "0" + (date.getMonth()+1);
        }
        else
        {
          dateMonth = (date.getMonth()+1);
        }
        dateYear = date.getFullYear();
        if (date.getHours() < 10){
          dateHour = "0" + date.getHours();
        }
        else
        {
          dateHour = date.getHours();
        }
        if (date.getMinutes() < 10){
          dateMinute = "0" + date.getMinutes();
        }
        else
        {
          dateMinute = date.getMinutes();
        }

        return `${dateDay}/${dateMonth}/${dateYear} - ${dateHour}:${dateMinute}`;
      },
      FetchData(){
        //pour récupérer la date de la dernière mesure
        fetch('http://localhost:3000/lastMesure')
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    this.lastUpdate = new Date(element["Date"]);
                    this.formattedLastUpdate = this.FormatDate(this.lastUpdate);
                });

                //permet d'afficher le graphique
                this.dataFetched = true;
            })
            .catch(function(error) {
                console.log(error);
            });
        }
      }
  }
  </script>
  
  <style scoped>
    .dashboard{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        padding: 12px;
    }

    .dashboard h2{
      margin-bottom: 8px;
    }

    .dashboard #top_container{
      box-sizing: border-box;
      display: flex;
      width: 100%;
      height: 64px;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 12px;
      padding: 12px 0;
    }

    .dashboard #top_container p{
      font-size: 1.3rem;
    }

    .dashboard #main_container{
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    @media (max-width: 500px) {
      .dashboard #main_container{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
      }

      .dashboard #top_container p{
        font-size: 0.9rem;
      }
    }
  </style>