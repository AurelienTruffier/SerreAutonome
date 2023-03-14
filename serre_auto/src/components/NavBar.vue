<template>
    <div class="nav_bar">
        <nav>
            <slot>
                
            </slot>
        </nav>
    </div>
</template>

<script>
export default{
    name: 'NavBar'
}
</script>

<style scoped>
.nav_bar{
    width: 100vw;
    height: 64px;
    box-sizing: border-box;
    background-color: rgb(220, 255, 163);
}
</style>