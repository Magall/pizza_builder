<template>
  <div>
    <nav>
      <div class="logo">
        <img src="@/assets/pizza.png" alt="Logo" srcset="" />
        <h3>Pizza Builder</h3>
      </div>
      <img
        src="@/assets/menu_mobile.svg"
        alt="Botão Menu"
        srcset=""
        class="menuBtn"
        @click="openNav()"
      />
      <ul class="desktopNav">
        <router-link to="/"><li>Pizza</li></router-link>
        <router-link to="/bebidas"><li>Bebidas</li></router-link>
        <router-link to="/pedido"><li>Meu Pedido</li></router-link>
      </ul>
    </nav>
    <div id="mySidenav" class="sidenav" :style="{ width: wid + 'px' }">
      <span @click="closeNav()">X</span>
      <ul>
        <router-link to="/"><li @click="closeNav()">Pizza</li></router-link>
        <router-link to="/bebidas"
          ><li @click="closeNav()">Bebidas</li></router-link
        >
        <router-link to="/pedido"
          ><li @click="closeNav()">Meu Pedido</li></router-link
        >
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wid: 0,
    };
  },
  methods: {
    openNav() {
      this.wid = 250;
    },
    closeNav() {
      this.wid = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./Header.scss";
</style>
