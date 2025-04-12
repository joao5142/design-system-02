import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppDefaultProvider from "@/components/partials/modal/AppDefaultProvider.vue";

const wrapper = mount(AppDefaultProvider);

describe("AppDefaultProvider", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
