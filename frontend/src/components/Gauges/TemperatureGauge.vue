<template>
    <div id="temperature_gauge">
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
    name: 'TemperatureGauge',
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
                    text: "Température de la serre",
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
                    min: -20,
                    max: 50,

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
                            from: -20,
                            to: this.seuilBas,
                            color: "#9999FF"
                        },
                        {
                            from: this.seuilBas,
                            to: this.seuilHaut,
                            color: "#BDE574"
                        },
                        {
                            from: this.seuilHaut,
                            to: 50,
                            color: "#FF5555" 
                        }
                    ]
                },
                series: [
                    {
                        name: "Température de la serre",
                        data: [this.value],
                        tooltip: {
                            valueSuffix: " °C",
                        },
                        dataLabels: {
                            borderWidth: 0,
                            format: '<span style="font-size: 1.4rem; font-family: \'Merriweather\', serif; color: #273616;">{y} °C</span>'
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
                    this.value = element["Temperature"]
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
                    this.seuilBas = element['SeuilBasTemp'];
                    this.seuilHaut= element['SeuilHautTemp'];
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
#temperature_gauge{
    display: flex;
    width: "280px";
    height: 200px;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: white;
}

@media (max-width: 700px) {
    #temperature_gauge{
        flex-direction: column;
    }
}
</style>
