<template>
  <div class="card" @mouseover="showHeartOutlined = true" @mouseleave="showHeartOutlined = false">
    <q-img :src="props.cat.url" alt="cat" class="cat-img">
      <template v-slot:loading>
        <q-img src="../assets/loaders/maxwell-loader.gif" />
      </template>
    </q-img>

    <q-btn
      v-if="showHeartOutlined && !showHeart"
      flat
      round
      color="red"
      size="xl"
      icon="favorite_border"
      class="heart-icon"
      @mouseenter="showHeart = true" />
    <q-btn
      v-if="showHeart || store.isInFavorites(props.cat.id)"
      flat
      round
      color="red"
      size="xl"
      icon="favorite"
      class="heart-icon"
      @mouseleave="showHeart = false"
      @click="store.addToFavorites(props.cat)" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { CatEntity } from '../entities/CatEntity';
import { useFavoritesStore } from '../stores/FavoritesStore';

const showHeartOutlined = ref(false);
const showHeart = ref(false);

const props = defineProps<{ cat: CatEntity }>();

const store = useFavoritesStore();
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 225px;
  height: 225px;
  transition: all ease 0.1s;

  &:hover {
    scale: 1.1;
    -webkit-box-shadow: 0px 8px 12px 0px rgba(34, 60, 80, 0.55);
    -moz-box-shadow: 0px 8px 12px 0px rgba(34, 60, 80, 0.55);
    box-shadow: 0px 8px 12px 0px rgba(34, 60, 80, 0.55);
  }

  @media (max-width: $breakpoint-mobile) {
    width: 100%;
    height: 100%;
  }
}

.cat-img {
  width: 100%;
  height: 100%;
}

.heart-icon,
.heart-icon-outlined {
  position: absolute;
  bottom: 0;
  right: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}
</style>
