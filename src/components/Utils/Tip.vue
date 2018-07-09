<template>
<v-snackbar v-model="ifTip" :color="color" :multi-line="true" :timeout="timeout" top>
    {{ showText }}
    <v-btn dark flat @click="ifTip = false">
        关闭
    </v-btn>
</v-snackbar>
</template>

<script>
export default {
    name: 'Tip',
    data() {
        return {
            color: 'grey darken-2',
            timeout: 3000,
        }
    },
    computed: {
        ifTip: {
            get: function(){
                return this.$store.state.tipOpen;
            },
            set: function(){
                this.$store.state.tipOpen = !this.$store.state.tipOpen;
            }
        },
        showText: {
            get: function(){
                return this.$store.state.tipText;
            },
            set: function(){

            }
        }
    }
}
</script>
