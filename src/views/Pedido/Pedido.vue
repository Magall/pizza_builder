<template>
  <div id="pedido">
    <h1>Pedido</h1>
    <div class="pedidoDesktopContainer">
      <PizzaCard
        :sabores="n.sabores"
        :tamanho="n.tamanho"
        :borda="n.borda"
        :preco="n.preco"
        :id="index"
        v-for="(n, index) in normalizedPizzas"
        :key="n.sabores + index"
      />
      <BebidaPedido
        :bebida="bebida"
        :id="index"
        v-for="(bebida, index) in bebidas"
        :key="bebida + index"
      />
    </div>
    <h3>Valor do pedido: R$ {{ calcularPreco() }}</h3>
    <textarea
      name=""
      id=""
      cols="43"
      rows="10"
      placeholder="Observações..."
      class="comments"
    ></textarea>

    <button @click="dadosEntrega()">Dados Entrega</button>
  </div>
</template>
<script>
import PizzaCard from "@/components/PizzaCard/PizzaCard";
import BebidaPedido from "@/components/BebidaPedido/BebidaPedido";
export default {
  name: "Pedido",
  components: { PizzaCard, BebidaPedido },
  methods: {
    getBebidas() {
      const bebidas = this.$store.getters.getBebidas;
      return bebidas;
    },
    dadosEntrega() {
      this.$router.push("/dadosEntrega");
    },
    calcularPreco() {
      let preco = 0;
      this.bebidas.forEach((bebida) => {
        preco += Number(bebida.price);
      });
      this.normalizedPizzas.forEach((pizza) => {
        preco += pizza.preco;
      });
      return preco;
    },
  },
  computed: {
    normalizedPizzas: {
      get() {
        return this.$store.getters.getPizzas;
      },
    },
    bebidas: {
      get() {
        return this.$store.getters.getBebidas;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./Pedido.scss";
</style>
