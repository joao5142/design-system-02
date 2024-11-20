<template>
  <app-box class="pa-4 card" hover-effect background="dark-300">
    <app-avatar class="card__avatar" :size="50" :src="user?.avatar" />

    <app-text class="d-block mt-7 card__name" as="strong" color="text-900">
      {{ user.name }}
    </app-text>

    <app-text as="span" color="text-700" size="xs">
      Desde {{ user.year }}
    </app-text>

    <a v-if="!isMe" href="" class="card__link">Deixar de seguir</a>
  </app-box>
</template>

<script setup lang="ts">
import AppAvatar from "@/components/ui/avatar/AppAvatar.vue";
import AppText from "@/components/ui/text/AppText.vue";

import UserDefaultImage from "@/assets/img/user.webp";

interface IUser {
  avatar: string;
  year: string;
  name: string;
}

interface IProps {
  isMe: boolean;
  imFollowing?: boolean;
  user: IUser;
}

withDefaults(defineProps<IProps>(), {
  user: () => ({
    avatar: UserDefaultImage,
    name: "João Paulo",
    year: "2023",
  }),
});
</script>

<style scoped lang="scss">
.card {
  height: auto;
  overflow-clip-margin: 20px;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__avatar {
    position: relative;
    z-index: 30;
    margin-top: -35px;
  }

  &__link {
    margin-top: 0.6rem;
    font-size: var(--v-theme-font-size-xs);
    color: rgb(var(--v-theme-text-500));
  }

  &__name {
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
