import { mount, createLocalVue } from "@vue/test-utils";
import PizzaCard from "@/components/PizzaCard/PizzaCard";
import Vuex from "vuex";
import mutations from "@/store/mutations";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Remoção de pizzas", () => {
  let store;
  let state = {
    pizzas: [
      {
        borda: "cheddar",
        id: 0,
        preco: 30,
        sabores: "calabresa,portuguesa",
        tamanho: "média",
      },
    ],
  };
  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      state,
    });
  });
  test("Teste remoção de pizza", async () => {
    const wrapper = mount(PizzaCard, {
      store,
      localVue,
      propsData: {
        borda: "cheddar",
        id: 0,
        preco: 30,
        sabores: "calabresa,portuguesa",
        tamanho: "média",
      },
    });

    await wrapper.find("button").trigger("click");
  });
});
