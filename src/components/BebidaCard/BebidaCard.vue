<template>
  <div id="BebidaCard" class="container">
    <img :src="require('@/assets/bebidas/' + img)" alt="Logo lata" srcset="" />
    <div class="info">
      <h3>{{ name }}</h3>
      <h4>R${{ price }}</h4>
    </div>
    <div class="buttons">
      <button @click="removeBebida()" :disabled="!isDisabled()">-</button>
      <button @click="addBebida()">+</button>
      <span>{{ countBebida() }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "BebidaCard",
  props: ["img", "name", "price"],
  methods: {
    addBebida() {
      this.$store.commit("adicionarBebida", this.name);
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
