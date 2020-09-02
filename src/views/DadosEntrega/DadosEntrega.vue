<template>
  <div id="form" class="container">
    <h2>Dados Entrega</h2>
    
      <input type="text" name="nome" id="nome" placeholder="Nome" />
      <input type="number" name="tel" id="tel" placeholder="Telefone" />
      <input
        type="text"
        name="logradouro"
        id="logradouro"
        placeholder="Logradouro"
      />
      <input type="number" name="num" id="num" placeholder="Número" />
      <button @click="enviarCozinha()">Enviar Pedido</button>
    </div>
 
</template>
<script>
export default {
  methods: {
    enviarCozinha() {
      alert("Pedido enviado a nossa cozinha.");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./DadosEntrega.scss";
</style>
