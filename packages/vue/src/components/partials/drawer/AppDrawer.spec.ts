import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppDrawer from "@/components/partials/modal/AppDrawer.vue";

const wrapper = mount(AppDrawer);

describe("AppDrawer", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
