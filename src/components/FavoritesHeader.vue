<template>
  <div class="favorites-header" @click="confirm = true">Этой кнопкой можно прогнать всех котиков из избранного</div>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Ты точно хочешь прогнать всех котиков? Им так уютно с тобой...</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Оставить" color="primary" v-close-popup />
        <q-btn flat label="Прогнать" color="negative" v-close-popup @click="store.clearFavorites" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFavoritesStore } from '../stores/FavoritesStore';

const store = useFavoritesStore();
const confirm = ref(false);
</script>

<style scoped lang="scss">
.favorites-header {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: $header-height;
  left: 25%;
  width: 50%;
  z-index: 15;

  font-size: 16px;
  font-weight: 700;
  padding: 0.5rem;

  color: $text-accent;
  background: $primary;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5);

  transition: all ease 0.2s;

  @media (max-width: $breakpoint-mobile) {
    left: 0;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    scale: 1.01;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
  }
}
</style>
