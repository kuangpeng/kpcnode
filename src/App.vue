<template>
    <div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>

export default {
    name: "App",
    data:function(){
        return {
            scrollMap: {}
        }
    },
    watch: {
        $route(to, from){
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            let path = from.path.replace(/\//, '$');
            this.scrollMap[path] = scrollTop;
            localStorage.setItem("scrollMap", JSON.stringify(this.scrollMap));
        }
    },
    updated: function(){
        var hash = window.location.hash.slice(1);
        var scrollMap = JSON.parse(localStorage.getItem('scrollMap'));

        let path = hash.replace(/\//g, '$');
        if(scrollMap[path] && this.$route.meta.keepAlive){
            document.documentElement.scrollTop = scrollMap[path];
            window.pageYOffset = scrollMap[path];
            document.body.scrollTop = scrollMap[path];
        }
    }
}
</script>

<style>
@import url('https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css');
@import './assets/css/common.css';
@import './assets/css/main.css';
html,body{
    position: relative;
    width: 100%;
}
body{
    overflow-y: auto;
    background-color: #f9f9f9;
}
.container{
    width: 100%;
    z-index: 10;
    margin-top: 46px;
    margin-bottom: 50px;
}
</style>
