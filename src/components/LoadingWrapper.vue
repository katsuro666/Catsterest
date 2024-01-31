<template>
  <div v-if="isLoading" class="loading">
    <q-img src="../assets/loaders/meme-loader.gif" width="250px" height="250px" />
  </div>

  <div v-else class="content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.content {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 225px);
  gap: 48px;

  @media (max-width: $breakpoint-mobile) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

.loading {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
