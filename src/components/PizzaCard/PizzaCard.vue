<template>
  <div id="pizzaCard" class="container">
    <h4>Pizza</h4>
    <div class="content">
      <div class="pizzaItems ">
        <div>
          <span class="item">Sabores:</span> <span>{{ sabores }}</span>
        </div>
        <div>
          <span class="item">Tamanho: </span> <span> {{ tamanho }}</span>
        </div>
        <div>
          <span class="item">Borda: </span> <span> {{ borda }}</span>
        </div>
         <div>
          <span class="item">Preco: </span> <span>R$ {{ preco }}</span>
        </div>
      </div>
        <button @click="removerPizza()">X</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "PizzaCard",
  props: ["sabores", "tamanho", "borda", "id","preco"],
  methods: {
    removerPizza() {
      this.$store.commit("removerPizza", this.id);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./PizzaCard";
</style>
