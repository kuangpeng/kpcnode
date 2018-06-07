<template>
  <div id="app">
    <Header></Header>
    <div id="mainContent">
      <router-view/>
    </div>
    <MenuBar></MenuBar>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header'
import MenuBar from '@/components/Layout/MenuBar'

export default {
  name: 'App',
  components: {
    Header,
    MenuBar
  }
}
</script>

<style>
@import "./assets/style/base.css";

html,body{
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
  position: relative;
  z-index: 100;
  top: 0;
  left: 0;
}
#mainContent{
  padding-top: 40px;
  padding-bottom: 50px;
}
</style>
