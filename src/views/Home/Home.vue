<template>
  <div id="home">
    {{ getSabores() }}
    <h3>Sabor ({{ getLength() }}/2)</h3>
    <SaborCard :sabor="sabor" v-for="sabor in sabores" :key="sabor" />

    <PizzaModal @close="showModal = false" v-if="showModal" />
    <h3>Borda</h3>
    {{ getSaborBorda() }}
    <BordaSection :bordas="borda" />
    <h3>Tamanho</h3>
    <TamanhoSection :tamanhos="tamanhos" />
    <button @click="adicionarPedido()">Nova Pizza</button>
    <button @click="getPedidos()">Escolher Bebida</button>
  </div>
</template>
<style lang="scss" scoped>
@import "./Home.scss";
</style>
<script>
// @ is an alias to /src
import SaborCard from "@/components/SaborCard/SaborCard";
import BordaSection from "@/components/BordaSection/BordaSection";
import TamanhoSection from "@/components/TamanhoSection/TamanhoSection";
import PizzaModal from "@/components/PizzaModal/PizzaModal";
import store from "@/store";
export default {
  name: "Home",
  components: {
    SaborCard,
    BordaSection,
    TamanhoSection,
    PizzaModal,
  },

  methods: {
    getPedidos() {
      console.log(store.getters.getPedidos);
    },
    getLength() {
      return store.getters.getSaboresEscolhidos.length;
    },
    getSabores() {
      return store.getters.getSaboresEscolhidos;
    },
    getSaborBorda() {
      return store.getters.getBorda;
    },
    getTamanho() {
      return this.$store.getters.getTamanho;
    },
    adicionarPedido() {
      if (this.validarPizza()) {
        store.commit("adicionarPedido");
      } else {
        this.showModal = true;
      }
    },

    validarPizza() {
      const tamanho = this.getTamanho();
      const sabores = this.getLength();
      const borda = this.getSaborBorda();

      if (tamanho === 0 || sabores === "" || borda === "") {
        return false;
      } else {
        return true;
      }
    },
  },
  data() {
    return {
      showModal: false,
      sabores: [
        "calabresa",
        "portuguesa",
        "mussarela",
        "peperoni",
        "a moda",
        "bacon",
        "milho",
        "frango com catupiry",
        "palmito",
        "quatro queijos",
      ],
      borda: [
        { sabor: "nenhum", preco: 0 },
        { sabor: "cheddar", preco: 3 },
        { sabor: "creamcheese", preco: 4 },
        { sabor: "catupiry", preco: 5 },
      ],
      tamanhos: [
        { tamanho: "brotinho", preco: 25 },
        { tamanho: "média", preco: 35 },
        { tamanho: "grande", preco: 40 },
        { tamanho: "gigante", preco: 50 },
      ],
    };
  },
};
</script>
