export default {
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
  }