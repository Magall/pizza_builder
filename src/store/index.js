import Vue from "vue";
import Vuex from "vuex";

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
  mutations: {
    adicionarPizza(state) {
      //Validação para não inserir pizza

      let obj = {};
      (obj["sabores"] = state.saboresEscolhidos.join()),
        (obj["borda"] = state.bordaEscolhida),
        (obj["tamanho"] = state.tamanho),
        (obj["preco"] = state.precoPizza);

      if (
        (state.saboresEscolhidos.length === 0 &&
          state.bordaEscolhida === "" &&
          state.tamanho === "") === false
      ) {
        state.pizzas.push(obj);
      }

      state.saboresEscolhidos = [];
      state.bordaEscolhida = "";
      state.tamanho = "";
      state.precoPizza = 0;
    },
    adicionarSabor(state, sabor) {
      state.saboresEscolhidos.push(sabor);
    },
    removerSabor(state, sabor) {
      const index = state.saboresEscolhidos.indexOf(sabor);
      state.saboresEscolhidos.splice(index, 1);
    },

    incrementarPrecoPizza(state, valor) {
      state.precoPizza += valor;
    },
    escolherBorda(state, valor) {
      state.bordaEscolhida = valor;
    },
    escolherTamanho(state, value) {
      state.tamanho = value;
    },
    adicionarBebida(state, value) {
      state.bebidasEscolhidas.push(value);
    },
    removerBebidaId(state, id) {
      state.bebidasEscolhidas.splice(id, 1);
    },
    removerBebida(state, bebida) {
      let index = -1;
      state.bebidasEscolhidas.forEach((el, idx) => {
        if (el.name === bebida) {
          index = idx;
          return;
        }
      });

      state.bebidasEscolhidas.splice(index, 1);
    },
    removerPizza(state, id) {
      state.pizzas.splice(id, 1);
    },
  },
  actions: {},
  getters: {
    getSaboresEscolhidos(state) {
      return state.saboresEscolhidos;
    },
    getValorPizza(state) {
      return state.valorPizza;
    },
    getBorda(state) {
      return state.bordaEscolhida;
    },
    getPizzas(state) {
      return state.pizzas;
    },
    getTamanho(state) {
      return state.tamanho;
    },
    countBebida: (state) => (bebida) => {
      let count = 0;
      for (let i = 0; i < state.bebidasEscolhidas.length; i++) {
        if (state.bebidasEscolhidas[i].name === bebida) {
          count++;
        }
      }
      return count;
    },
    countBebidasPedido(state) {
      let obj = {};
      const bebidas = [...new Set(state.bebidasEscolhidas)];

      bebidas.forEach((bebida) => {
        obj[bebida] = state.bebidasEscolhidas.reduce((acc, cur) => {
          if (cur === bebida) {
            acc++;
          }
          return acc;
        }, 0);
      });

      var op = [];
      Object.keys(obj).forEach(function(key) {
        var aux = {};
        (aux["sabor"] = key), (aux["quantidade"] = obj[key]);
        op.push(aux); //push newly created object in `op`array
      });
      return op;
    },
    getBebidas(state) {
      return state.bebidasEscolhidas.sort();
    },
  },
  modules: {},
});
