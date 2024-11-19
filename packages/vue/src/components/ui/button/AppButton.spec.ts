import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppButton from "@/components/ui/box/AppButton.vue";

const wrapper = mount(AppButton, {
  slots: {
    default: "Texto",
  },
});

describe("AppButton", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should be able to see slot on screen", () => {
    expect(wrapper.html()).toContain("Texto");
  });
});
