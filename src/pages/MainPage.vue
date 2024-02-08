<template>
  <LoadingWrapper :isLoading="isLoading">
    <CatCard v-for="cat in catsArr" :key="cat.id" :cat="cat" />
  </LoadingWrapper>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CatCard from '../components/CatCard.vue';
import { CatEntity } from '../entities/CatEntity';
import LoadingWrapper from '../components/LoadingWrapper.vue';

const catsArr = ref<CatEntity[]>([]);
const isLoading = ref(false);

async function getCats() {
  isLoading.value = true;
  const response = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=60&api_key=${import.meta.env.VITE_API_KEY}`
  );
  catsArr.value = response.data;
  isLoading.value = false;
}

onMounted(getCats);
</script>

<style scoped lang="scss"></style>
