<template>
    <div class="nav_bar">
        <nav>
            <slot>
                
            </slot>
            <DisconnectionButton v-if="$store.state.userIsConnected"></DisconnectionButton>
        </nav>
    </div>
</template>

<script>
import DisconnectionButton from '@/components/DisconnectionButton.vue';

export default{
    name: 'NavBar',
    components: {
        DisconnectionButton
    }
}
</script>

<style scoped>
.nav_bar{
    width: 100vw;
    height: 64px;
    box-sizing: border-box;
    background-color: rgb(220, 255, 163);
}

.nav_bar nav{
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 8px;
}
</style>