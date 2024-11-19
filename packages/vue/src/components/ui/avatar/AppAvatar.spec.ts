import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppAvatar from "@/components/ui/avatar/AppAvatar.vue";

const wrapper = mount(AppAvatar);

describe("AppAvatar", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
