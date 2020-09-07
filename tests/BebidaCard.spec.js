import { mount, createLocalVue } from "@vue/test-utils";
import BebidaCard from "@/components/BebidaCard/BebidaCard";
import Vuex from "vuex";
import mutations from "@/store/mutations";
import getters from "@/store/getters"
import "@testing-library/jest-dom";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Testes Bebida Card count bebida =0", () => {
  let mutations;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      // caso especial que getter recebe parâmetro por outra
      //funcão vide códifo store
      countBebida: () => () => 0,
    };

    store = new Vuex.Store({
      getters,
      mutations,
    });
  });
  test("Quando não existem bebidas - deve estar desabilitado", () => {
    const wrapper = mount(BebidaCard, { store, localVue });
    expect(wrapper.find("#remover").element).toBeDisabled();
  });
});

describe("Testes Bebida Card count bebida = 1", () => {
  let mutations;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      // caso especial que getter recebe parâmetro por outra
      //funcão vide códifo store
      countBebida: () => () => 1,
    };
    store = new Vuex.Store({
      getters,
      mutations,
    });
  });
  test("Quando existem bebidas botão - se torna clicável", async () => {
    const wrapper = mount(BebidaCard, { store, localVue });
    expect(wrapper.find("#remover").element).toBeEnabled();
  });
});

describe("testando funcoes de adição e deleção de bebidas", () => {
  let store;
 
  let state = {
    bebidasEscolhidas: [],
  };
  beforeEach(() => {
    store = new Vuex.Store({
      getters,
      mutations,
      state,
    });
  });

  test("adicionarBebida", async () => {
    const wrapper = mount(BebidaCard, {
      store,
      localVue,
      propsData: {
        name: "Guaraná",
        price: "5",
      },
    });
    await wrapper.find("#adicionar").trigger("click");
    expect(state.bebidasEscolhidas).toEqual(
      expect.arrayContaining([{ name: "Guaraná", price: "5" }])
    );
  });

  test("removerBebida", async () => {
    const wrapper = mount(BebidaCard, {
      store,
      localVue,
      propsData: {
        name: "Guaraná",
        price: "5",
      },
    });
    await wrapper.find("#remover").trigger("click");
    expect(state.bebidasEscolhidas).toHaveLength(0);
  });
});
