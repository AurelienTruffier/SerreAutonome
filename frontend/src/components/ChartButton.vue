<template>
    <div class="chart_button">
        <button @click="alert()">{{ title }}</button>
    </div>
</template>

<script>
export default {
    name: 'ChartButton',
    props:{
        title: String
    }
}
</script>

<style scoped>
    .chart_button button{
        width: 160px;
        height: 32px;
        box-sizing: content-box;
        font-size: 0.95rem;
        font-family: 'Merriweather', serif;
        background-color: #327F22;
        cursor: pointer;
        border: none;
        outline: none;
        color: white;
        border-radius: 8px;
        padding: 8px;
        transition: transform 0.3s linear;
    }

    .chart_button button:hover{
        transform: scale(1.2);
    }

    /* RESPONSIVE */
    @media (max-width: 920px) {
        .chart_button button{
            width: 115px;
        }
    }
</style>