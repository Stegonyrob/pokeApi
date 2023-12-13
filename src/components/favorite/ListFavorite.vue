<script setup>
import { ref, reactive, computed } from "vue";
import { getPokemon } from '../repository/repository.js';
import { useFavoritesStore } from '../../stores/favoritesStore.js';
import PokemonCard from "../home/PokemonCard.vue";

let pokemons = reactive([]);
let isLoaded = ref(false);

const favoritesStore = useFavoritesStore();
const favoritesList = favoritesStore.favoritesList;

async function getData() {
 pokemons = await getPokemon();
 isLoaded.value = true;
}

getData();
</script>

<template>
 <section>
 <PokemonCard
   v-if="isLoaded"
   v-for="pokemon in favoritesList"
   :pokemon="pokemon"
 />
 <div v-else>Cargando</div>
 </section>
</template>
