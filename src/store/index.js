import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saboresEscolhidos:[],
    bordaEscolhida:'',
    tamanho:'',
    pedidos:[]
  },
  mutations: {
    adicionarPedido(state){
      let arr =[];
        arr.push(state.saboresEscolhidos,state.bordaEscolhida,state.tamanho);
        state.pedidos.push(arr);
        state.saboresEscolhidos=[];
        state.bordaEscolhida='';
        state.tamanho='';
    },
    adicionarSabor(state,sabor){
      state.saboresEscolhidos.push(sabor)
    },
    removerSabor(state,sabor){
      const index = state.saboresEscolhidos.indexOf(sabor);
      state.saboresEscolhidos.splice(index, 1);
    },
    alterarValorBorda(state,valor){
      state.precoBorda =valor;
    },
    
    escolherBorda(state,valor){
      state.bordaEscolhida =valor;
    },
    escolherTamanho(state,value){
      state.tamanho=value;
    }

  },
  actions: {
  },
  getters: {
    getSaboresEscolhidos (state) {
      return state.saboresEscolhidos;
    },
    getValorPizza(state){
      return state.valorPizza;
    },
    getBorda(state){
      return state.bordaEscolhida;
    },
    getPedidos(state){
      return state.pedidos;
    },
    getTamanho(state){
      return state.tamanho;
    }
    
  },
  modules: {
  }
})
