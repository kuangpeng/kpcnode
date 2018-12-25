<template>
<div id="my">
    <div class="container">
        my
    </div>
    <bottom :current-tab="tab"></bottom>
</div>
</template>

<script>
import Bottom from "../components/layout/Bottom.vue";

export default {
    name: 'My',
    components: {
        Bottom
    },
    data: function () {
        return {
            tab: 1
        }
    },
    beforeRouteLeave (to, from, next) {
        if(to.name == 'home'){
            to.meta.isBack = true;
        }
        next();
    }
}
</script>

<style scoped>
#my .container{
    margin-top: 0;
}
</style>
