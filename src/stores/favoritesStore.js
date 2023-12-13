import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { getPokemon } from '../components/repository/repository';

export const useFavoritesStore = defineStore("favorites", () => {
 const favoritesList = reactive([]);

 function addFavorite(pokemon) {
   if (!favoritesList.includes(pokemon)) {
     favoritesList.push(pokemon);
   }
 }

 function removeFavorite(pokemon) {
   const index = favoritesList.indexOf(pokemon);
   if (index !== -1) {
     favoritesList.splice(index, 1);
   }
 }

 async function getFavorites() {
   const allPokemons = await getPokemon();
   const favorites = allPokemons.filter(pokemon => favoritesList.includes(pokemon));
   return favorites;
 }

 return { favoritesList, addFavorite, removeFavorite, getFavorites };
});
