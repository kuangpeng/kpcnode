<template>
    <div id="header">
        <div class="logo">
            <router-link to="/"><img src=""></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
#header{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    height: 40px;
    background: #444;
}
#header .title{
    font-size: 16px;
    line-height: 40px;
    color: #fff;
    text-align: center;
}
</style>

