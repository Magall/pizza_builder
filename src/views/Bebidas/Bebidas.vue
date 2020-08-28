<template>
  <div id="bebidas">
    <BebidaCard  :img="bebida.img" :name="bebida.name" :price="bebida.price"  v-for='bebida in bebidas' :key="bebida.name" />
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
        { img: "cocaCola.jpg", name: "Coca-cola", price: "5" },
        { img: "gurana.jpg", name: "Guraná", price: "5" },
        { img: "fantaLaranja.jpg", name: "Fanta Laranja", price: "5" },
        { img: "suco.jpg", name: "Suco de uva", price: "6" },
      ],
    };
  },
};
</script>
