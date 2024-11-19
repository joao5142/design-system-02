import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppCheckbox from "@/components/ui/checkbox/AppCheckbox.vue";

const wrapper = mount(AppCheckbox);

describe("AppCheckbox", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
