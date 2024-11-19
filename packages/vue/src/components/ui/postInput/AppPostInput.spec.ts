import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppPostInput from "@/components/ui/postInput/AppPostInput.vue";

const wrapper = mount(AppPostInput);

describe("AppPostInput", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
