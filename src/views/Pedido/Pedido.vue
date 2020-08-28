<template>
  <div>
    <h1>Pedido</h1>
    <div v-for="n in normalizedPizzas" :key="n[0]">
        <p>Sabores: {{n[0]}} </p> 
        <p>Borda: {{n[1]}}</p>
        <p>Tamanho: {{n[2]}}</p>
    </div>
    {{ getPizzas() }}
  </div>
</template>
<script>
export default {
  name: "Pedido",
  methods: {
    getPizzas() {
      const pizzas = this.$store.getters.getNormalizedPizzas;


      return pizzas;
    },
  },
  computed: {
    normalizedPizzas: {
      get() {
        return this.$store.getters.getNormalizedPizzas;;
      },
    },
  }
};
</script>
