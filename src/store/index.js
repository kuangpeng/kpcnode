import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tipOpen: false,
    tipText: ''
  },
  mutations: {
    tipChange(state, text) {
      state.tipOpen = !state.tipOpen;
      if (state.tipOpen) {
        state.tipText = text;
      }
    }
  }
});

export default store;
