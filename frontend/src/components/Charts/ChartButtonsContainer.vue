<template>
    <div class="chart_buttons_container">
        <ChartButton title="Température" @click="ChangeSelected('temperature')"></ChartButton>
        <ChartButton title="Humidité de l'air" @click="ChangeSelected('air_humidity')"></ChartButton>
        <ChartButton title="Humidité du sol" @click="ChangeSelected('ground_humidity')"></ChartButton>
        <ChartButton title="Luminosité" @click="ChangeSelected('brightness')"></ChartButton>
        <!-- <ChartButton title="Batterie" @click="ChangeSelected('battery')"></ChartButton> -->
        <ChartButton title="Température de la batterie" @click="ChangeSelected('battery_temp')"></ChartButton>
    </div>
</template>

<script>
import ChartButton from './ChartButton.vue';

export default {
    name: "ChartButtonsContainer",
    components: {
        ChartButton
    },
    data(){
        return{
            selected: null
        }
    },
    methods:{
        ChangeSelected(newValue){
            this.selected = newValue;
            this.$emit('NewSelected', this.selected);
    }
    }
}
</script>

<style scoped>
    .chart_buttons_container{
        display: flex;
        gap: 12px;
        width: 180px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    /* RESPONSIVE */
    @media (max-width: 700px) {
        .chart_buttons_container{
            width: 320px;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
</style>