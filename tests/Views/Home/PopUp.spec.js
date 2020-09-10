import { mount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home/Home";
import Vuex from "vuex";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import "@testing-library/jest-dom";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("Testando casos que os ingredientes não foram preenchidos corretamente", () => {
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

  test("clicar Nova Pizza faltando tamanho", async () => {
    const wrappper = mount(Home, { store, localVue });
    // simulando vuex caso esqueça apenas de escolher o tamanho
    mutations.adicionarSabor(state, "teste");
    mutations.adicionarSabor(state, "testinho");
    mutations.escolherBorda(state, "cheddar");

    await wrappper
      .find(".desktopButtonContainer  button:first-child")
      .trigger("click");
    const popUp = wrappper.find("#pizzaModal").element;
    expect(popUp).toBeVisible();
  });
});

describe("Testando casos que os ingredientes não foram preenchidos corretamente", () => {
  let store;
  let state = {
    saboresEscolhidos: [],
    bebidasEscolhidas: [],
    bordaEscolhida: "",
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

  test("clicar Nova Pizza faltando tamanho deve mostrar popup", async () => {
    const wrappper = mount(Home, { store, localVue });
    // simulando vuex caso esqueça apenas de escolher o tamanho
    mutations.adicionarSabor(state, "teste");
    mutations.adicionarSabor(state, "testinho");
    mutations.escolherBorda(state, "cheddar");

    await wrappper
      .find(".desktopButtonContainer  button:first-child")
      .trigger("click");
    const popUp = wrappper.find("#pizzaModal").element;
    expect(popUp).toBeVisible();
  });

  test("clicar em bebidas faltando tamanho deve mostrar popup", async () => {
    const wrappper = mount(Home, { store, localVue });

    await wrappper
      .find(".desktopButtonContainer  button:last-child")
      .trigger("click");
    const popUp = wrappper.find("#pizzaModal").element;
    expect(popUp).toBeVisible();
  });

  test("clicar nova pizza sem escolher borda deve mostrar popup", async () => {
    state.bordaEscolhida = "";

    const wrappper = mount(Home, { store, localVue });
    mutations.escolherTamanho(state, "grande");
    await wrappper
      .find(".desktopButtonContainer  button:first-child")
      .trigger("click");
    const popUp = wrappper.find("#pizzaModal").element;
    expect(popUp).toBeVisible();
  });

  test("clicar escolher bebidas sem escolher borda deve mostrar popup", async () => {

    const wrappper = mount(Home, { store, localVue });
    await wrappper
      .find(".desktopButtonContainer  button:last-child")
      .trigger("click");
    const popUp = wrappper.find("#pizzaModal").element;
    expect(popUp).toBeVisible();
  });
});
