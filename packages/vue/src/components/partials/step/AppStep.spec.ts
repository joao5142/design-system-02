import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppStep from "@/components/ui/post/AppStep.vue";

const wrapper = mount(AppStep);

describe("AppStep", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
