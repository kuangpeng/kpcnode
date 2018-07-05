<template>
<div>
    <v-list>
        <template v-for="(item, index) in list">
            <v-list-tile :key="index" avatar :to="{path: '/detail/'+item.id}" class="item">
                <v-list-tile-avatar size="40">
                    <img :src="item.img">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title>10/10</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
        </template>
    </v-list>
</div>
</template>

<script>
export default {
    name: 'Index',
    data: function () {
        return {
            list: [{
                id: '1',
                title: '1222222222222',
                img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
            }, {
                id: '2',
                title: '1222222222222',
                img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
            }, {
                id: '3',
                title: '1222222222222',
                img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
            }, {
                id: '4',
                title: '1222222222222',
                img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
            }, {
                id: '5',
                title: '1222222222222',
                img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
            }, {
                id: '6',
                title: '1222222222222',
                img: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120'
            }, ]
        }
    },
    methods: {
        loadcontent: function () {
            console.log(2222222)
        }
    }
}
</script>

<style scoped>
.ptb10{
    padding-top: 10px;
    padding-bottom: 10px;
}

</style>
