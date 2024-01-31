import { defineStore } from 'pinia';
import { ref, onBeforeMount } from 'vue';
import { CatEntity } from '../entities/CatEntity';
import { showAddNewCatNotification, showDeleteAllCatsNotification, showDeleteCatNotification } from '../utils/notificationUtils';

export const useFavoritesStore = defineStore('favorites', () => {

  const favorites = ref<CatEntity[]>([]);

  onBeforeMount(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.value = Array.isArray(storedFavorites) ? storedFavorites : [];
  });

  function updateLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  function isInFavorites(id: string) {
    return favorites.value.some((cat) => cat.id === id);
  }

  function addToFavorites(cat: CatEntity) {
    if (!isInFavorites(cat.id)) {
      favorites.value.push(cat);
      updateLocalStorage();
      showAddNewCatNotification();
    } else {
      removeFromFavorites(cat.id);
    }
  }

  function removeFromFavorites(id: string) {
    const index = favorites.value.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      favorites.value.splice(index, 1);
      updateLocalStorage();
      showDeleteCatNotification();
    }
  }

  function clearFavorites() {
    favorites.value = [];
    updateLocalStorage();
    showDeleteAllCatsNotification();
  }

  return { favorites, isInFavorites, addToFavorites, removeFromFavorites, clearFavorites };
});
