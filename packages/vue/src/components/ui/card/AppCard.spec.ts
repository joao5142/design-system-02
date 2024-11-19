import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppCard from "@/components/ui/box/AppCard.vue";

const wrapper = mount(AppCard, {
  slots: {
    default: "Texto",
  },
});

describe("AppCard", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should be able to see slot on screen", () => {
    expect(wrapper.html()).toContain("Texto");
  });
});
