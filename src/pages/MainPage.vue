<template>
  <div v-if="isLoading" class="loading">
    <q-circular-progress indeterminate rounded size="50px" color="primary" />
  </div>

  <div v-else class="cats">
    <CatCard v-for="cat in catsArr" :key="cat.id" :cat="cat" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CatCard from '../components/CatCard.vue';
import { CatEntity } from '../entities/CatEntity';

const catsArr = ref<CatEntity[]>([]);
const isLoading = ref(false);

async function getCats() {
  isLoading.value = true;
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=30&api_key=${import.meta.env.VITE_API_KEY}`
  );
  catsArr.value = response.data;
  isLoading.value = false;
}

onMounted(getCats);
</script>

<style scoped lang="scss">
.cats {
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  gap: 48px;
  margin-top: 4rem;

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
