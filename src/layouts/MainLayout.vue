<template>
  <div class="header">
    <router-link :to="RoutePaths.MAIN" class="header-link" activeClass="header-link-active">Все котики</router-link>

    <router-link :to="RoutePaths.FAVORITES" class="header-link" activeClass="header-link-active">
      Любимые котики
    </router-link>
    
  </div>
  <favorites-header v-if="$route.path === RoutePaths.FAVORITES" />
  <router-view class="main" />
</template>

<script setup lang="ts">
import FavoritesHeader from '../components/FavoritesHeader.vue';
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
  height: $header-height;
  padding: 0 4rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  font-size: 16px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: $breakpoint-mobile) {
    padding: 1rem;
    justify-content: space-between;
  }
}

.main {
  padding-top: calc($header-height + 3rem);
  padding-right: 3rem;
  padding-bottom: 24px;
  padding-left: 3rem;

  @media (max-width: $breakpoint-mobile) {
    padding-top: calc($header-height + 5rem);
    padding-right: 1rem;
    padding-bottom: 4rem;
    padding-left: 1rem;
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
