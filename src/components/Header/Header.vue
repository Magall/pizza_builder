<template>
  <div>
    <nav>
      <img src="@/assets/pizza.png" alt="Logo" srcset="" />
      <img
        src="@/assets/menu_mobile.svg"
        alt="Botão Menu"
        srcset=""
        class="menuBtn"
        @click="openNav()"
      />
    </nav>
      <div id="mySidenav" class="sidenav" :style="{ width: wid + 'px' }">
        <span @click ="closeNav()">X</span>
        <ul>
          <li>Montar Pizza</li>
          <li>Bebidas</li>
          <li>Sobremesas</li>
          <li>Meu pedido</li>
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
    closeNav(){
      this.wid=0
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./Header.scss";
</style>
