<script setup>
import { ref, reactive } from "vue";


const props = defineProps({
 pokemon: Object,
});

let detailsPokemon = reactive({});
let detailsLoaded = ref(false);
let favorites = reactive([]);

async function getDetails() {
 const response = await fetch(props.pokemon.url);
 const data = await response.json();
 detailsPokemon = data;
 detailsLoaded.value = true;
}

function addToFavorites() {
 if (!favorites.includes(props.pokemon)) {
   favorites.push(props.pokemon);
 }
}

getDetails();
</script>

<template>
 <div>
   <h3>Poke Card</h3>
   <img v-if="detailsLoaded" :src="detailsPokemon.sprites.front_default" alt="pokemon" />
   <div>
     <h2>Soy la card de {{ props.pokemon.name }} con id {{ detailsPokemon.id }} </h2>
     <div id="uri">{{ props.pokemon.url }}</div>
   </div>

   <div v-show="detailsLoaded">{{ detailsPokemon.height }}</div>
   <button @click="addToFavorites">❤️</button>
 </div>
</template>
