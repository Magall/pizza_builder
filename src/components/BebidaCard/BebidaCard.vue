<template>
  <div id="BebidaCard" class="container">
    <!-- <img :src="require('@/assets/bebidas/' + img)" alt="Logo lata" srcset="" /> -->
    <div class="info">
      <h3>{{ name }}</h3>
      <h4>R${{ price }}</h4>
    </div>
    <div class="buttons">
      <button id="remover" @click="removeBebida()" :disabled="!isDisabled()">-</button>
      <button id="adicionar" @click="addBebida()">+</button>
      <span>{{ countBebida() }}</span>
    </div>
  </div>
</template>
<script>
import store from "@/store"
export default {
  name: "BebidaCard",
  props: [ "name", "price"],
  methods: {
    addBebida() {
      this.$store.commit("adicionarBebida", {name:this.name,price:this.price});
    
    },
    countBebida() {
      return this.$store.getters.countBebida(this.name);
    },
    isDisabled() {
      return this.$store.getters.countBebida(this.name) > 0;
    },
    removeBebida(){
        this.$store.commit("removerBebida",this.name)
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./BebidaCard.scss";
</style>
