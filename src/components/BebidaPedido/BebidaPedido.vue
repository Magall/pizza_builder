<template>
    <div id="BebidaPedido" class="container">
       <h4>{{bebida.name}} R$ {{bebida.price}}</h4>
       <button @click="removerBebida()">X</button>
    </div>
</template>
<script>
export default {
    name:"BebidaPedido",
    props:["bebida","id","price"],
    methods:{
        removerBebida(){
            this.$store.commit("removerBebidaId",this.id)
        }
    }
}
</script>
<style lang="scss" scoped>
@import './BebidaPedido.scss'
</style>