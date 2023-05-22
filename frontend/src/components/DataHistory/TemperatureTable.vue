<template>
    <div class="temperature_table">
        <table>
            <thead>
                <tr>
                    <th colspan="2">Température de la serre</th>
                </tr>
                <tr>
                    <th>°C</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="element in final" :key="element.date">
                    <td>{{ element.value }}</td>
                    <td>{{ element.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TemperatureTable',
    data(){
        return {
            dates: [],
            values: [],
            final: []
        }
    },
    mounted() {
        this.FetchData()
    },
    methods: {
        FetchData(){
            fetch('http://localhost:3000/mesures')
            .then(response => {
                return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    const newDate = new Date(element['Date']);

                    let formattedDay = null;
                    if (newDate.getDate() < 10) {
                        formattedDay =  "0" + newDate.getDate();
                    }
                    else
                    {
                        formattedDay = newDate.getDate();
                    }

                    let formattedMonth = null;
                    if (newDate.getMonth() < 10) {
                        formattedMonth =  "0" + newDate.getMonth();
                    }
                    else
                    {
                        formattedMonth = newDate.getMonth();
                    }
                    const label = `${formattedDay}/${formattedMonth} - ${newDate.getHours()}:${newDate.getMinutes()}`;
                    let newValue = element['Temperature'];

                    //enlève les virgules
                    newValue = newValue.toString().replace(".", ",");

                    this.dates.push(label);
                    this.values.push(newValue);
                });

                for (let i = 0; i < this.dates.length; i++){
                    let newObject = {
                        value: this.values[i],
                        date: this.dates[i]
                    }

                    this.final.push(newObject);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
    .temperature_table{
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        /* transition: all 120s; */
    }

    /* .temperature_table:hover{
        background-image: url('@/assets/shrek.jpeg');
        transform: scale(5);
        width: 100vh;
        height: 100vh;
        color: red;
        transform: rotate(1800deg);
    } */

    th, td{
        padding: 8px 24px;
    }
</style>