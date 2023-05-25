<template>
    <div v-if="dataFetched" class="battery_level">
        <img src="@/assets/la-batterie.png" alt="">
        <p>{{ this.value }}%</p>
    </div>
</template>

<script>
export default {
    name: 'BatteryLevel',
    data(){
        return{
            dataFetched: false,
            value: 0
        }
    },
    methods: {
        FetchData(){
            fetch('http://localhost:3000/battery')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.value = data[0]['ChargeBatterie'];
                this.dataFetched = true;
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    },
    mounted(){
        this.FetchData();
    },
}
</script>

<style scoped>
    .battery_level{
        display: flex;
        width: 180px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .battery_level p{
        font-size: 2.5rem;
    }

    .battery_level img{
        width: 60px;
    }

    @media (max-width: 500px) {
        .battery_level p{
            font-size: 1.3rem;
        }
        .battery_level img{
            width: 50px;
        }
    }
</style>