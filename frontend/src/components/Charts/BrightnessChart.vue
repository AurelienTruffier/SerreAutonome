<template>
    <div id="brightness_chart">
        <highcharts v-if="dataFetched" :options="chartOptions"></highcharts>
        <div id="input_container">
            <select name="select_max_values" id="select_max_values" ref="input">
                <option value="3">30 dernières minutes</option>
                <option value="6">60 dernières minutes</option>
                <option value="9">90 dernières minutes</option>
                <option value="12">120 dernières minutes</option>
                <option value="18">180 dernières minutes</option>
                <option value="24">240 dernières minutes</option>
            </select>
            <button id="update_btn" role="button" @click="FetchData">Rafraîchir le graphique</button>
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default{
    name: 'BrightnessChart',
    components:{
        highcharts: Chart 
    },
    mounted(){
        //génère les dimensions du graph et va fetch les données
        this.ResizeChart();
        window.addEventListener('resize', this.ResizeChart);
    },
    unmounted(){
        window.removeEventListener('resize', this.ResizeChart);
    },
    data(){
        return{
            chartWidth: 600,
            chartHeight: 360,
            dates: [],
            values: [],
            maxNumberValues: 0,
            dataFetched: true
        }
    },
    computed:{
        chartOptions(){
            return{
                chart:{
                    width: this.chartWidth,
                    height: this.chartHeight
                },
                title: {
                    text: 'Luminosité'
                },
                xAxis: {
                    categories: this.dates
                },
                yAxis: {
                    title: {
                        text: 'Unité à définir'
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                series: [{
                    name: 'Luminosité',
                    color: "#E9D102",
                    data: this.values
                }]
            }
        }
    },
    methods:{
        UpdateMaxNumberValues(){
            this.maxNumberValues = parseInt(this.$refs.input.value, 10);
            this.dataFetched = false;
        },
        FetchData(){
            this.UpdateMaxNumberValues();
            //réinitialise les tableaux qui contiennent les valeurs
            this.dates = [];
            this.values = [];
            console.log('Mise à jour du graphique');
            fetch('http://localhost:3000/mesures')
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    const newDate = new Date(element['Date']);
                    const label = `${newDate.getHours()}:${newDate.getMinutes()}`;
                    const newValue = element['Luminosite'];
                    //selon la durée souhaitée
                    if(this.dates.length < this.maxNumberValues){
                        this.dates.push(label);
                        this.values.push(newValue);
                    }
                });
                
                //pour éviter que les anciennes valeurs s'affichent en premier
                this.dates = this.dates.reverse();
                this.values = this.values.reverse();

                //permet d'afficher le graphique
                this.dataFetched = true;
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        ResizeChart(){
            if(window.outerWidth < 1000){
                console.log("Format mobile");
                this.chartWidth = 310;
                this.chartHeight = 200;
                this.FetchData();
            }
            else{
                console.log("Format desktop");
                this.chartWidth = 600;
                this.chartHeight = 360;
                this.FetchData();
            }
        }
    }
}
</script>

<style scoped>
#brightness_chart{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#brightness_chart #input_container{
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#brightness_chart #input_container #select_max_values{
    width: 200px;
    padding: 6px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 18px 0;
}

#brightness_chart #input_container #update_btn{
    width: 220px;
    box-sizing: content-box;
    font-family: 'Merriweather', serif;
    background-color: #327F22;
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    border-radius: 8px;
    padding: 8px;
    transition: width 0.3s linear;
}

#brightness_chart #input_container #update_btn:hover{
    width: 250px;
}

@media (max-width: 700px) {
    #brightness_chart{
        flex-direction: column;
    }
}
</style>