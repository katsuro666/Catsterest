<template>
  <LoadingWrapper :isLoading="isLoading">
    <CatCard v-for="cat in store.favorites" :key="cat.id" :cat="cat" />
  </LoadingWrapper>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFavoritesStore } from '../stores/FavoritesStore';
import LoadingWrapper from '../components/LoadingWrapper.vue';
import CatCard from '../components/CatCard.vue';

const isLoading = ref(false);

const store = useFavoritesStore();
</script>

<style scoped lang="scss">
.favorites-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
