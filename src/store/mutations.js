export default{
    adicionarPizza(state) {
      //Validação para não inserir pizza

      let obj = {};
      (obj["sabores"] = state.saboresEscolhidos.join()),
        (obj["borda"] = state.bordaEscolhida),
        (obj["tamanho"] = state.tamanho),
        (obj["preco"] = state.precoPizza);
      //Validação para não inserir uma pizza vazia.
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
  }