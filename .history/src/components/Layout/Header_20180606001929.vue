<template>
    <div id="header">
        <div class="logo">
            <router-link to="/"><img src="../../assets/images/cnodejs_light.svg"></router-link>
        </div>
        <div class="search">
            <form>
                <input type="text" name="q" value="" />
            </form>
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
    /* height: 60px; */
    background: #444;
    padding: 10px 0;
}
#header .logo{
    width: 40%;
    margin: 0 auto;
}
#header .search{
    width: 60%;
    margin: 10px auto 0;
}
#header .search input{
    border: none;
    background: url("../../assets/images/search.hashed.png") 4px 4px no-repeat #888;
    border-radius: 15px;
    height: 30px;
    padding: 3px 5px 3px 22px;
    display: block;
    width: 100%;
    color: #fff;
    font-size: 13px;
}
</style>

