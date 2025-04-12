import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppDivider from "@/components/ui/box/AppDivider.vue";

const wrapper = mount(AppDivider, {
  slots: {
    default: "Texto",
  },
});

describe("AppDivider", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should be able to see slot on screen", () => {
    expect(wrapper.html()).toContain("Texto");
  });
});
