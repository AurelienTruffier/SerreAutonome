<template>
    <div class="classic_button">
        <button :style="{'width': width}" role="button">
            {{ title }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'ClassicButton',
    props:{
        title:{
            type: String,
            required: true
        },
        link:{
            type: String,
            required: true
        },
        width: Number
    }
}
</script>

<style scoped>
    .classic_button button{
        box-sizing: content-box;
        width: 120px;
        height: 25px;
        font-size: 0.95rem;
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
    .classic_button button:hover{
        width: 124px;
    }

    /* RESPONSIVE */
    @media (max-width: 920px) {
        .classic_button button{
            width: 115px;
        }
    }
</style>