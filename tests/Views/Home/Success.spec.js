import { mount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home/Home";
import Bebidas from "@/views/Bebidas/Bebidas"
import Vuex from "vuex";
import VueRouter from 'vue-router'
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import router from "@/router";
import "@testing-library/jest-dom";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter)
//const router = new VueRouter()


describe("Teste inserir todos os ingredientes", () => {
  let store;
  let state = {
    saboresEscolhidos: [],
    bebidasEscolhidas: [],
    bordaEscolhida: "a",
    tamanho: "",
    precoPizza: 0,
    pizzas: [],
  };
  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      getters,
      state,
    });
  });
 
  test("Clicar em nova pizza com todos os ingredientes preenchidos corretamente", async () => {
    mutations.adicionarSabor(state, "calabresa");
    mutations.adicionarSabor(state, "mussarela");
    mutations.escolherTamanho(state, "brotinho");
    mutations.escolherBorda(state, "cheddar");
    // mutations.adicionarPizza(state);
    const wrapper = mount(Home, { store, localVue });
    // mutations.adicionarPizza(state);
    await wrapper
      .find(".desktopButtonContainer  button:first-child")
      .trigger("click");
    expect(state.pizzas).toEqual(
      expect.arrayContaining([
        {
          sabores: "calabresa,mussarela",
          borda: "cheddar",
          tamanho: "brotinho",
          preco: 20,
        },
      ])
    );
  });

  test("Clicar em escolher bebida com todos os ingredientes preenchidos corretamente e mudar a rota", async () => {
    
    mutations.adicionarSabor(state, "calabresa");
    mutations.adicionarSabor(state, "mussarela");
    mutations.escolherTamanho(state, "brotinho");
    mutations.escolherBorda(state, "cheddar");
    // mutations.adicionarPizza(state);
    const wrapper = mount(Home, { store, localVue ,router});
    // mutations.adicionarPizza(state);
    await wrapper
      .find(".desktopButtonContainer  button:last-child")
      .trigger("click");
      expect(wrapper.vm.$route.path).toBe("/bebidas")
  });




});
