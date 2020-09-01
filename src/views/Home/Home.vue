<template>
  <div id="home">
    <h3>Sabor ({{ getLength() }}/2)</h3>
    <SaborCard :sabor="sabor" v-for="sabor in sabores" :key="sabor" />
    <PizzaModal @close="showModal = false" v-if="showModal" />
    <h3>Borda</h3>
    <BordaSection :bordas="bordas" />
    <h3>Tamanho</h3>
    <TamanhoSection :tamanhos="tamanhos" />
    <button @click="adicionarPizza()">Nova Pizza</button>
    <button @click="goToBebidas()">Escolher Bebida</button>
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
    goToBebidas() {
      if (this.validarPizza()) {
        this.setTamanhoPrice();
        store.commit("adicionarPizza");
        this.$router.push("/bebidas");
      } else {
        this.showModal = true;
      }
    },
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
    //mock preço deveria ser calculado pelo backend
    setTamanhoPrice() {
      const tamanho = this.$store.getters.getTamanho;
      let pizzaPrice = 0;
      const pizzas = this.$store.getters.getPizzas;
      switch (tamanho) {
        case "brotinho":
          pizzaPrice = 20;
          break;
        case "média":
          pizzaPrice = 30;
          break;
        case "grande":
          pizzaPrice = 40;
          break;
        case "gigante":
          pizzaPrice = 45;
      }
      store.commit("incrementarPrecoPizza", pizzaPrice);
    },

    adicionarPizza() {
      if (this.validarPizza()) {
        this.setTamanhoPrice();
        store.commit("adicionarPizza");
      } else {
        this.showModal = true;
      }
    },

    validarPizza() {
      const tamanho = this.getTamanho();
      const sabores = this.getLength();
      const borda = this.getSaborBorda();
      //Caso nenhum elemento esteja marcado
      console.log(tamanho + " " + sabores + " " + borda);
      if (tamanho === "" && sabores === 0 && borda === "") {
        console.log("a");
        return true;
      } 
      else if (tamanho === "" || sabores === 0 || borda === "") {
        console.log("b");
        return false;
      }
       else {
         console.log("c")
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
      bordas: [
        { sabor: "nenhum", preco: 0 },
        { sabor: "cheddar", preco: 3 },
        { sabor: "creamcheese", preco: 4 },
        { sabor: "catupiry", preco: 5 },
      ],
      tamanhos: [
        { tamanho: "brotinho" },
        { tamanho: "média" },
        { tamanho: "grande" },
        { tamanho: "gigante" },
      ],
      precosTamanho: [],
    };
  },
};
</script>
