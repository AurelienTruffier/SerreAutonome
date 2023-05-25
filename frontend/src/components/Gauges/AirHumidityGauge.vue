<template>
    <div id="air_humidity_gauge">
        <highcharts v-if="dataFetched" :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { Chart } from 'highcharts-vue';

import Highcharts from 'highcharts'

import exportingInit from 'highcharts/modules/exporting'
exportingInit(Highcharts);

import hcMore from "highcharts/highcharts-more";
hcMore(Highcharts);

export default{
    name: 'AirHumidityGauge',
    components:{
        highcharts: Chart
    },
    mounted(){
        this.FetchData();
    },
    unmounted(){

    },
    data(){
        return{
            dataFetched: true,
            value: 0,
            seuilBas: 0,
            seuilHaut: 0
        }
    },
    computed:{
        chartOptions(){
            return{
                chart: {
                    width: 275,
                    height: 195,
                    type: "gauge",
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },

                title: {
                    text: "Humidité de l'air",
                    style: {
                        color: "#273616",
                        fontFamily: "'Merriweather', serif"
                    }
                },

                pane: {
                    startAngle: -90,
                    endAngle: 90,
                    size: "125%",
                    center: ["50%", "58%"],
                    background: null,
                    borderWidth: 0
                },
                yAxis: {
                    min: 0,
                    max: 100,

                    minorTickInterval: "auto",
                    minorTickWidth: 0,
                    minorTickLength: 10,
                    minorTickPosition: "inside",
                    minorTickColor: "#666",

                    tickInterval: 20,
                    tickWidth: 0,
                    tickPosition: "inside",
                    tickLength: 10,
                    tickColor: "#666",
                    labels: {
                        enabled: false
                    },
                    plotBands: [
                        {
                            from: 0,
                            to: this.seuilBas,
                            color: "#FF5555"
                        },
                        {
                            from: this.seuilBas,
                            to: this.seuilHaut,
                            color: "#BDE574"
                        },
                        {
                            from: this.seuilHaut,
                            to: 100,
                            color: "#FF5555" 
                        }
                    ]
                },
                series: [
                    {
                        name: "Humidité de l'air",
                        data: [this.value],
                        tooltip: {
                            valueSuffix: " %",
                        },
                        dataLabels: {
                            borderWidth: 0,
                            format: '<span style="font-size: 1.4rem; font-family: \'Merriweather\', serif; color: #273616;">{y} %</span>'
                        }
                    }
                ]
            }
        }
    },
    methods:{
        FetchData(){
            fetch('http://localhost:3000/lastMesure')
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    this.value = element["HumiditeAir"]
                });

                //permet d'afficher le graphique
                this.dataFetched = true;
            })
            .catch(function(error) {
                console.log(error);
            });

            fetch('http://localhost:3000/seuils')
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    this.seuilBas = element['SeuilBasHumidAir'];
                    this.seuilHaut= element['SeuilHautHumidAir'];
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
#air_humidity_gauge{
    display: flex;
    width: "280px";
    height: 200px;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: white;
}

@media (max-width: 700px) {
    #air_humidity_gauge{
        flex-direction: column;
    }
}
</style>
