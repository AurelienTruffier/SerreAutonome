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
    margin-bottom: 24px;
    box-sizing: border-box;
    background-color: rgb(220, 255, 163);
    position: static;
    top: 0px;
    left: 0px;
}
</style>