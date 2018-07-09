<template>
<div>
    <v-btn color="light-green" dark fixed bottom left fab small class="btn-bottom-actions" @click="backPage">
        <v-icon class="d-flex">undo</v-icon>
    </v-btn>
    <v-btn color="light-green" dark fixed bottom right fab small class="btn-bottom-actions" @click="showComment">
        <v-icon class="d-flex">comment</v-icon>
    </v-btn>
</div>
</template>

<script>
export default {
    name: 'ToolBar',
    methods: {
        backPage: function(){
            this.$router.go(-1);
        },
        showComment(){
            var now = new Date();
            this.$store.commit('tipChange', now.getTime());
        }
    }
}
</script>

<style scoped>
.btn-bottom-actions{
    bottom: 60px;
}
.btn-back{
    bottom: 60px;
}
</style>
