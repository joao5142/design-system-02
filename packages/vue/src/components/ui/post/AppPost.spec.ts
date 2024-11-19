import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppPost from "@/components/ui/post/AppPost.vue";

const wrapper = mount(AppPost);

describe("AppPost", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
