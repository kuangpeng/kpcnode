<template>
<div>
    <top-header :title="detail.title" :left-arrow="showNavArrow" :left-text="navLeftText">
        <span slot="headRight"><van-icon name="search" slot="right" /></span>
    </top-header>
    <div class="container">
        <div class="news_detail">
            <div class="news_header">
                <h4 class="news_title">{{detail.title}}</h4>
                <div class="news_info">
                    <span>&nbsp;{{detail.create_at|formateTime}}</span>
                    <span>&nbsp;{{detail.author.loginname}}</span>
                    <span>&nbsp;{{detail.visit_count}}次浏览</span>
                    <span>&nbsp;栏目 [{{detail.tab|newsType}}]</span>
                </div>
            </div>
            <div class="news_body">
                <div v-html="detail.content" class="detail_content"></div>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import {Toast} from 'vant'
import TopHeader from "../components/layout/TopHeader.vue";

export default {
    name: 'Detail',
    components: {
        [Toast.name]: Toast,
        TopHeader
    },
    data: function () {
        return {
            showNavArrow: true,
            navLeftText: '返回',
            detail: {
                title: '',
                author: {
                    loginname: ''
                }
            }
        }
    },
    beforeCreate: function () {
        
    },
    created: function () {
        Toast.loading({
            mask: true,
            message: '加载中...'
        });

        var _this = this;
        var id = _this.$route.params.id;

        fetch(_this.$urlConfig.cnodejs.hostUrl + '/topic/' + id + '?mdrender=true')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                Toast.clear();
                if (data.success) {
                    _this.detail = data.data;
                }
                else{
                    setTimeout(function(){
                        Toast.fail('请求数据失败！');
                    },500);
                }
            });

    },
    methods: {
        
    },
    filters: {
        formateTime: function(value) {
            if(!value) return '';
            let t = new Date(value);
            return t.getFullYear() + '-' + t.getMonth() + '-' + t.getDate();
        },
        newsType: function(val) {
            if(!val) return '';
            return {
                good: '精华',
                share: '分享',
                ask: '问答',
                job: '招聘'
            }[val];
        }
    },
    beforeRouteLeave (to, from, next) {
        to.meta.isBack = true;
        next();
    }
}
</script>

<style>
.news_detail {
    padding: 10px 0;
}

.news_detail .news_header{
    padding: 0 10px 10px;
    border-bottom: 1px solid #ccc;
}

.news_detail .news_info{
    color: #838383;
    font-size: 12px;
}
.news_detail .news_info span{
    margin-right: 7px;
}
.news_detail .news_info span::before{
    content: '•';
}

.news_body{
    padding: 10px;
}

.detail_content p{
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.detail_content a{
    color: #08c;
    text-decoration: underline;
}

.detail_content img {
    display: block;
    margin: 10px auto;
    max-width: 100%;
}
</style>
