import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppLoading from "@/components/ui/loading/AppLoading.vue";

const wrapper = mount(AppLoading);

describe("AppLoading", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
