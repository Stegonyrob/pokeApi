import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore({
 id: 'favorites',
 state: () => ({
   favoritesList: [],
 }),
 actions: {
   addFavorite(pokemon) {
     this.favoritesList.push(pokemon);
   },
   removeFavorite(pokemon) {
     const index = this.favoritesList.indexOf(pokemon);
     if (index !== -1) {
       this.favoritesList.splice(index, 1);
     }
   },
 },
});
