import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saboresEscolhidos:[],
    bebidasEscolhidas:[],
    bordaEscolhida:'',
    tamanho:'',
    pizzas:[],
    

  },
  mutations: {
    adicionarPedido(state){
      let arr =[];
        arr.push(...state.saboresEscolhidos,state.bordaEscolhida,state.tamanho);
        state.pizzas.push(arr);
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
    },
    adicionarBebida(state,value){
      state.bebidasEscolhidas.push(value);
    },
    removerBebida(state,bebida){
      const index = state.bebidasEscolhidas.indexOf(bebida);
      state.bebidasEscolhidas.splice(index, 1);
    },
  


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
    getPizzas(state){
      return state.pizzas;
    },
    getTamanho(state){
      return state.tamanho;
    },
    countBebida: (state) =>(bebida) => {
      let count=0;
      for(let i=0;i<state.bebidasEscolhidas.length;i++){
        if(state.bebidasEscolhidas[i]===bebida){
          count++
        }
      }
      return count;
    },
    getNormalizedPizzas(state){
      let pizzacopy = [...state.pizzas]
      for (let i = 0; i < pizzacopy.length; i++) {
        if (pizzacopy[i].length === 4) {
        /*Caso a pizza seja de dois sabores concatena-se os dois sabores em
         uma string e remove-se a posição do segundo sabor para não ficar duplicado*/
          pizzacopy[i][0] = pizzacopy[i][0] +","+ pizzacopy[i][1];
          pizzacopy[i].splice(1, 1);
        }
      }
      return pizzacopy;
    }
    
  },
  modules: {
  }
})
