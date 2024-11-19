import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppText from "@/components/ui/text/AppText.vue";

const wrapper = mount(AppText, {
  slots: {
    default: "Texto",
  },
});

describe("AppText", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should be able to see slot on screen", () => {
    expect(wrapper.html()).toContain("Texto");
  });
});
