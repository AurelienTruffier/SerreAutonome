<template>
    <div class="disconnection_button">
        <button @click="this.$store.dispatch('disconnection')">Se déconnecter</button>
    </div>
</template>

<script>
export default {
    name: 'DisconnectionButton'
}
</script>

<style scoped>
    .disconnection_button button{
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
        transition: all 0.3s linear;
    }
    .disconnection_button button:hover{
        width: 124px;
    }

    /* RESPONSIVE */
    @media (max-width: 920px) {
        .disconnection_button button{
            width: 115px;
        }
    }
</style>