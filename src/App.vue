<template>
<div id="app">
    <v-app>
        <Header></Header>
        <v-content id="content">
            <v-slide-x-transition mode="out-in">
                <router-view/>
            </v-slide-x-transition>
            <ToolBar></ToolBar>
        </v-content>
        <MenuBar></MenuBar>
    </v-app>
</div>
</template>

<script>
import Header from '@/components/Layout/Header';
import MenuBar from '@/components/Layout/MenuBar';
import ToolBar from '@/components/layout/ToolBar';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

export default {
    name: 'App',
    components: {
        Header,
        MenuBar,
        ToolBar
    }
}
</script>

<style>
@import "./assets/style/base.css";
@import "./assets/style/main.css";
html,
body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
}

#content>div{
  padding-bottom: 50px;
}

/* #mainContent{
  padding-top: 40px;
  padding-bottom: 50px;
} */
</style>
