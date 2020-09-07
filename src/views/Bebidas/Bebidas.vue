<template>
  <div id="bebidas">
    <h2>Bebidas</h2>
    <BebidaCard  :img="bebida.img" :name="bebida.name" :price="bebida.price"  v-for='bebida in bebidas' :key="bebida.name" />
    <router-link  to="/pedido"><button>Ver pedido</button></router-link>
  </div>
</template>
<script>
import BebidaCard from "@/components/BebidaCard/BebidaCard";
export default {
  name: "Bebidas",
  components: {
    BebidaCard,
  },
  data() {
    return {
      bebidas: [
        { img: "CocaCola.jpg", name: "Coca-cola", price: "5" },
        { img: "Guarana.jpg", name: "Guraná", price: "5" },
        { img: "FantaLaranja.jpg", name: "Fanta Laranja", price: "5" },
        { img: "Suco.jpg", name: "Suco de uva", price: "6" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
  @import './Bebidas.scss';
</style>
