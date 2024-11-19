import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppModal from "@/components/partials/modal/AppModal.vue";

const wrapper = mount(AppModal);

describe("AppModal", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
