import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<string[]>([]);

  function inFavorites(item: string) {
    return favorites.value.includes(item);
  }
  
  function addToFavorites(item: string) {
    if (!favorites.value.includes(item)) {
      favorites.value.push(item);
    } else {
      removeFromFavorites(item);
    }
  }

  function removeFromFavorites(item: string) {
    const index = favorites.value.indexOf(item);
    if (index !== -1) {
      favorites.value.splice(index, 1);
    }
  }

  function clearFavorites() {
    favorites.value = [];
  }

  return { favorites, inFavorites, addToFavorites, removeFromFavorites, clearFavorites };
});
