<template>
  <div>
    <h1>Pedido</h1>
    <PizzaCard
      :sabores="n.sabores"
      :tamanho="n.tamanho"
      :borda="n.borda"
      :preco="n.preco"
      :id="index"
      v-for="(n, index) in normalizedPizzas"
      :key="n.sabores+index+borda"
    />
    <BebidaPedido
      :bebida="bebida"
      :id="index"
      v-for="(bebida, index) in bebidas"
      :key="bebida + index"
    />
    <textarea name="" id="" cols="43" rows="10" placeholder="Observações..."></textarea>
    <button @click="ConfirmarPedido()"> Dados Entrega</button>
    {{ getBebidas() }}
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
    confirmarPedido(){
      this.$router.push('/formulario')
    }
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
  @import'./Pedido.scss'
</style>
