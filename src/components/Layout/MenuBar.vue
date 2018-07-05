<template>
<v-bottom-nav :active.sync="bottomNav" :value="true" fixed app>
    <v-btn color="teal" flat value="recent" to="/">
        <span>首页</span>
        <v-icon>home</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="favorites" to="/user">
        <span>我的</span>
        <v-icon>account_circle</v-icon>
    </v-btn>
</v-bottom-nav>
<!-- <div id="menuBar">
        <ul>
            <li>
                <div class="item">
                    <router-link to="/">
                        <i></i>
                        <span>首页</span>
                    </router-link>
                </div>
            </li>
            <li>
                <div class="item">
                    <router-link to="/user">
                        <i></i>
                        <span>我的</span>
                    </router-link>
                </div>
            </li>
        </ul>
    </div> -->
</template>

<script>
export default {
    name: 'MenuBar',
    data() {
        return {
            bottomNav: 'recent'
        }
    }
}
</script>

<style scoped>

</style>
