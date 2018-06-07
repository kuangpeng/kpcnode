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
    background: #444;
    padding: 10px 0;
}
#header .logo{
    width: 100%
}
#header .logo a{
    display: block;
    width: 40%;
    max-width: 200px;
    min-width: 100px;
    margin: 0 auto;
}
#header .search{
    width: 60%;
    max-width: 300px;
    min-width: 120px;
    margin: 5px auto 0;
}
#header .search input{
    border: none;
    background: url("../../assets/images/search.hashed.png") 4px 4px no-repeat #fff;
    border-radius: 15px;
    height: 28px;
    padding: 3px 5px 3px 25px;
    display: block;
    width: 100%;
    color: #666;
    font-size: 14px;
    line-height: 1;
}
</style>

