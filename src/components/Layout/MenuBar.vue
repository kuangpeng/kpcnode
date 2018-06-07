<template>
    <div id="menuBar">
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
    </div>
</template>

<script>
export default {
    name: 'MenuBar'
}
</script>

<style scoped>
#menuBar{
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 50px;
    background: #f6f6f6;
    left: 0;
    bottom: 0;
    border-top: 1px solid #f0f0f0;
}
#menuBar ul{
    width: 100%;
    display: -webkit-box;
    display: flex;
    display: -webkit-flex;
    box-align: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}
#menuBar ul li{
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    min-width: 20px;
    width: 0%;
    text-align: center;
    flex: 50%;
}
#menuBar ul li .item{
    font-size: 14px;
}
</style>
