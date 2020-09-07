<template>
  <div id="saborCard">
    <p>{{ sabor }}</p>
    <div class="sabores">
      <button class="first" @click="apagarSabor()" v-if="this.saborInserido()">
        -
      </button>
      <button id="plus" v-show="this.saboresCheio()" @click="inserirSabor()">
        +
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./SaborCard.scss";
</style>
<script>
import store from "@/store";
export default {
  props: ["sabor"],
  computed: {
    sabores: {
      get() {
        return store.getters.getSaboresEscolhidos.length;
      },
    },
  },
  methods: {
    saboresCheio() {
      if (this.sabores < 2) {
        return true;
      } else {
        return false;
      }
    },
    inserirSabor() {
      store.commit("adicionarSabor", this.sabor);
    },
    apagarSabor() {
      store.commit("removerSabor", this.sabor);
    },
    saborInserido() {
      const sabores = store.getters.getSaboresEscolhidos;
      const index = sabores.indexOf(this.sabor);
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
