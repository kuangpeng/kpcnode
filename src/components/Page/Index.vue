<template>
    <div id="indexPage">
        <div class="tab">
            <ul>
                <li><span>最新</span></li>
                <li><span>最新</span></li>
            </ul>
        </div>
        <div class="content">
            <div class="item" v-for="it in list" :key="it.id">
                <div class="media">
                    <div class="media-left">
                        <div class="img">
                            <img :src="it.img" alt="">
                        </div>
                        <p>10</p>
                    </div>
                    <div class="media-body">
                        <p>
                            <router-link to="/">{{it.title}}</router-link>
                        </p>
                        <p>10/500</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data: function(){
        return{
            list:[
                {
                    id: '1',
                    title: '1222222222222',
                    img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
                },{
                    id: '2',
                    title: '1222222222222',
                    img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
                },{
                    id: '3',
                    title: '1222222222222',
                    img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
                },{
                    id: '4',
                    title: '1222222222222',
                    img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
                },{
                    id: '5',
                    title: '1222222222222',
                    img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
                },{
                    id: '6',
                    title: '1222222222222',
                    img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.tab{
    border-bottom: 1px solid #ccc;
}
.tab ul{
    font-size: 0;
    text-align: left;
}
.tab ul li{
    display: inline-block;
    margin-right: 5px;
    font-size: 14px;
}
.tab ul li span{
    display: inline-block;
    padding: 4px 5px;
}
</style>
