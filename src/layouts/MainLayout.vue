<template>
  <div class="content-wrapper">
    <div class="header">
      <router-link :to="RoutePaths.MAIN" class="header-link" activeClass="header-link-active">Все котики</router-link>

      <router-link :to="RoutePaths.FAVORITES" class="header-link" activeClass="header-link-active">
        Любимые котики
      </router-link>
    </div>
    <router-view class="main" />
  </div>
</template>

<script setup lang="ts">
import { RoutePaths } from '../constants/route.constants';
</script>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  background-color: $primary;
  height: 4rem;
  padding: 0 4rem;
  position: fixed;
  width: 100%;
  z-index: 10;

  @media (max-width: $breakpoint-mobile) {
    padding: 1rem;
    justify-content: space-between;
  }
}

.main {
  padding-top: 4rem;
  padding: 48px 4rem 24px;

  @media (max-width: $breakpoint-mobile) {
    padding: 1rem;
    justify-content: space-between;
  }
}

.header-link {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: $text-secondary;
  transition: all ease 0.3s;

  &-active {
    background: $accent;
    color: $text-accent;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
