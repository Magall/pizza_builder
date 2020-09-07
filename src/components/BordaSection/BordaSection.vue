<template>
  <div id="bordaSection" class="container">
    <div class="inputs">
       
      <div v-for="b in bordas" class="input" :key="b.sabor">
        <input
          type="radio"
          name="bordas"
          :value="b.sabor"
          :id="b.sabor"
          v-model="borda"
        />
        <label :for="b.sabor"
          ><span>{{ b.sabor }}</span></label>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "TamanhoSection",
  props: ["bordas"],
  computed: {
    borda: {
      get() {
        return store.getters.getBorda;
      },
      set(val) {
        store.commit("escolherBorda",val) ;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./BordaSection.scss";
</style>

