import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AppUserCard from "@/components/ui/userCard/AppUserCard.vue";

const wrapper = mount(AppUserCard);

describe("AppUserCard", () => {
  it("should render correctly", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
