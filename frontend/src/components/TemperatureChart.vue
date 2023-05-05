<template>
    <div id="temperature_chart">
        <highcharts v-if="dataFetched" :options="chartOptions"></highcharts>
        <div id="input_container">
            <select name="select_max_values" id="select_max_values">
                <option value="3">30 dernières minutes</option>
                <option value="6">60 dernières minutes</option>
                <option value="9">90 dernières minutes</option>
                <option value="12">120 dernières minutes</option>
                <option value="18">180 dernières minutes</option>
                <option value="24">240 dernières minutes</option>
            </select>
            <button id="update_btn" role="button">Rafraîchir le graphique</button>
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default{
    name: 'ChartContainer',
    components:{
        highcharts: Chart 
    },
    mounted(){
        //on va récupérer les données dès l'apparition du composant
        this.FetchData();
    },
    data(){
        return{
            dates: [],
            values: [],
            dataFetched: true
        }
    },
    computed:{
        chartOptions(){
            return{
                chart:{
                    width: 600,
                    height: 360
                },
                title: {
                    text: 'Température de la serre'
                },
                xAxis: {
                    categories: this.dates
                },
                yAxis: {
                    title: {
                        text: 'Température en °C'
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                series: [{
                    name: 'Température',
                    data: this.values
                }]
            }
        }
    },
    methods:{
        FetchData(){
            const maxNumberValues = 8; //parseInt(selectMaxValues.value, 10);
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
                    const newValue = element['Temperature'];
                    //selon la durée souhaitée
                    if(this.dates.length < maxNumberValues){
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
        }
    }
}
</script>

<style scoped>
#temperature_chart{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 900px;
    height: 360px;
}

#temperature_chart #input_container{
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#temperature_chart #input_container #select_max_values{
    width: 200px;
    padding: 6px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin: 18px 0;
}

#temperature_chart #input_container #update_btn{
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

#temperature_chart #input_container #update_btn:hover{
    width: 250px;
}
</style>