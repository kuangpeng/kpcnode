<template>
<div>
    <div class="newsList">
        <div class="nl">
            <news-item v-for="(item, index) in list" :key="index" :news="item"></news-item>
        </div>
    </div>
    <div class="pagination">
        <van-button v-show="has_next" @click="getNext" type="primary" size="large" :loading="isLoading">下一页</van-button>
        <van-button v-show="!has_next" size="large" type="danger" disabled>没有下一页了！</van-button>
    </div>
</div>
</template>

<script>
import { Button, Toast } from 'vant';
import NewsItem from './NewsItem.vue';

export default {
    name: 'NewsList',
    components: {
        NewsItem,
        [Button.name]: Button,
        [Toast.name]: Toast
    },
    data: function() {
        return {
            list: [],
            has_next: true,
            current_page: 1,
            isLoading: false
        }
    },
    beforeCreate: function(){
        this.$route.meta.isBack = false;
    },
    created: function() {
        //this.getData();        
    },
    methods: {
        getData: function(){
            var _this = this;
            let page = _this.current_page;

            this.isLoading = true;

            fetch(_this.$urlConfig.cnodejs.hostUrl + '/topics?page=' + page + '&tab=all&limit=20')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if(data.success){
                    if(!_this.list){
                        _this.list = [];
                    }
                    _this.list = _this.list.concat(data.data);
                }
                else{
                    Toast.fail('加载失败！');
                }
                _this.isLoading = false;
            })
        },
        getNext: function(){
            this.current_page += 1;
            this.getData();
        }
    },
    activated(){
        if(!this.$route.meta.isBack){
            this.getData();
        }
    }
}
</script>

<style scoped>
.newsList{
    padding-top: 5px;
}
.pagination{
    padding: 10px;
}
</style>

