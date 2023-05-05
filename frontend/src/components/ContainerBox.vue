<template>
    <div class="container_box">
        <slot></slot>
    </div>
</template>

<script>
export default{
    name: 'ContainerBox'
}
</script>

<style scoped>
.container_box{
    width: 92%;
    height: 100%;
    padding: 18px;
    border-radius: 6px;
    background-color: rgba(220, 255, 163, 0.75);
    box-sizing: border-box;
    /* overflow: hidden; */
}
</style>