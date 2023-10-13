import {expect, test} from "vitest";
import HelloWorld from "./HelloWorld.vue";
import {mount} from "@vue/test-utils";

test('init hello world component', ()=>  {
    const wrapper = mount(HelloWorld);
    expect(wrapper.exists()).toBe(true);
})