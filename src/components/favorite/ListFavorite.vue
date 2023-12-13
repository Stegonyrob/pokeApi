<script setup>
import { ref, reactive, onMounted } from "vue";
import { getPokemon } from '../repository/repository.js';
import { useFavoritesStore } from '../../stores/favoritesStore.js';
import PokemonCard from "../home/PokemonCard.vue";

const favoritesStore = useFavoritesStore();
const favoritesList = favoritesStore.favoritesList;

let pokemons = reactive([]);
let isLoaded = ref(false);

async function getFavorites() {
 const allPokemons = await getPokemon();
 pokemons = allPokemons.filter(pokemon => favoritesList.includes(pokemon.id));
 isLoaded.value = true;
}

onMounted(async () => {
 await getFavorites();
});
</script>

<template>
 <section>
 <PokemonCard
  v-if="isfavorite"
  v-for="pokemon in favoritesStore"
  :key="pokemon.id"
  :isfavorite="true"
 />
 <div v-else>Cargando</div>
 </section>
</template>
