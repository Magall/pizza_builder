import { mount, createLocalVue } from "@vue/test-utils";
import BebidaPedido from "@/components/BebidaPedido/BebidaPedido";
import Vuex from "vuex";
import mutations from "@/store/mutations";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Testes remoção bebida", () => {
  let store;
  let state = {
    bebidasEscolhidas: [{ name: "guarana", price: 5 }],
  };
  beforeEach(() => {
    store = new Vuex.Store({
      mutations,
      state,
    });
  });
  test("remoção de bebida", async () => {
    const wrapper = mount(BebidaPedido, {
      store,
      localVue,
      propsData: {
        id: 0,
        bebida: { name: "guarana", price: 5 },
      },
    });

    await wrapper.find("button").trigger("click");
    expect(state.bebidasEscolhidas).toHaveLength(0);
 
  });
});
