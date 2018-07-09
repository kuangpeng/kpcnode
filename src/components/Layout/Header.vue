<template>
<div>
    <v-toolbar app dark color="grey darken-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
            title
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon to="/search">
            <v-icon>search</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" fixed temporary width="220">
        <v-card color="grey darken-3" height="100" tile flat>
            <v-container fill-height>
                <v-layout justify-center>
                    <v-flex xs6>
                        <router-link to="/"><img src="../../assets/images/cnodejs_light.svg"></router-link>
                        <p class="text-xs-center shades--text text--white mt10">this is cnnode site</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <template v-for="(subItem, index) in items">
            <v-list-tile :key="subItem.title" to="/user" color="light-green">
                <v-list-tile-action>
                    <v-icon color="light-green">{{ subItem.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="index"></v-divider>
        </template>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    name: 'Header',
    data: function () {
        return {
            drawer: null,
            items: [{
                    title: 'Home',
                    icon: 'dashboard'
                },
                {
                    title: 'About',
                    icon: 'question_answer'
                }
            ]
        }
    }
}
</script>
