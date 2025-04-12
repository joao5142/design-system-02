import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppSelect from "@/components/ui/input/AppSelect.vue";

const wrapper = mount(AppSelect);

describe("AppSelect", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
