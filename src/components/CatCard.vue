<template>
  <div class="card">
    <q-img
      :src="props.cat.url"
      spinner-color="primary"
      alt="cat"
      class="cat-img"
    />
    
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CatEntity } from '../entities/CatEntity';

const props = defineProps<{ cat: CatEntity }>();
</script>

<style scoped lang="scss">
.card {
  width: 225px;
  height: 225px;
  transition: all ease 0.1s;

  &:hover {
    cursor: pointer;
    scale: 1.1;
    -webkit-box-shadow: 0px 8px 12px 0px rgba(34, 60, 80, 0.55);
    -moz-box-shadow: 0px 8px 12px 0px rgba(34, 60, 80, 0.55);
    box-shadow: 0px 8px 12px 0px rgba(34, 60, 80, 0.55);
  }
}

.cat-img {
  width: 100%;
  height: 100%;
}
</style>
