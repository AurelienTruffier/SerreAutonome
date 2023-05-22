<template>
    <div class="data_history_button">
        <button role="button">
            <router-link to="dataHistory">{{ title }}</router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: 'DataHistoryButton',
    data(){
        return {
            isHover: false
        }
    },
    props:{
        title:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .data_history_button button{
        box-sizing: content-box;
        width: 180px;
        height: 25px;
        font-size: 0.95rem;
        font-family: 'Merriweather', serif;
        background-color: #327F22;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 8px;
        padding: 8px;
        transition: width 0.3s linear;
    }
    .data_history_button button a{
        color: white;
        text-decoration: none;
    }
    .data_history_button button:hover {
        width: 190px;
    }
</style>