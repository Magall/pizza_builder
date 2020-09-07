import Vue from "vue";
import Vuex from "vuex";
import Mutations from './mutations'
import Getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saboresEscolhidos: [],
    bebidasEscolhidas: [],
    bordaEscolhida: "",
    tamanho: "",
    precoPizza: 0,
    pizzas: [],
  },
  mutations: Mutations,
  actions: {},
  getters: Getters,
  modules: {},
});
