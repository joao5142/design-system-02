import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppInput from "@/components/ui/input/AppInput.vue";

const wrapper = mount(AppInput);

describe("AppInput", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
