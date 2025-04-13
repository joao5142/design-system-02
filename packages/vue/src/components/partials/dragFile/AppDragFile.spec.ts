import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppDragFile from "@/components/partials/modal/AppDragFile.vue";

const wrapper = mount(AppDragFile);

describe("AppDragFile", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
