<template>
    <div class="brightness_table">
        <table>
            <thead>
                <tr>
                    <th colspan="2">Luminosité</th>
                </tr>
                <tr>
                    <th>Seuil</th>
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
    name: 'BrightnessTable',
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
                    let newValue = element['Luminosite'];

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
    .brightness_table{
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
    }

    th, td{
        padding: 8px 24px;
    }
</style>