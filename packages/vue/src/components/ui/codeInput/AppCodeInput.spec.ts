import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppCodeInput from "@/components/ui/post/AppCodeInput.vue";

const wrapper = mount(AppCodeInput);

describe("AppCodeInput", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
