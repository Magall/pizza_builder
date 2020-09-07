import { mount,createLocalVue } from "@vue/test-utils";
import SaborCard from "@/components/SaborCard/SaborCard";
import Vuex from 'vuex'
import "@testing-library/jest-dom";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    saboresEscolhidos: ["alice", "sdasd"],
  },
});

describe("SaborCard", () => {
  test("Se clicar no adicionar - deve apararecer", async () => {
    const wrapper = mount(SaborCard);
    await wrapper.find("#plus").trigger("click");
    expect(wrapper.find(".first").element).toBeVisible();
  });

  test("Se adicionar dois sabores botão adicionar some ", async() => {
 
    const wrapper = mount(SaborCard);
    await wrapper.find("#plus").trigger("click");
    await wrapper.find("#plus").trigger("click");
    expect(wrapper.find("#plus").element).not.toBeVisible();
  });
});
