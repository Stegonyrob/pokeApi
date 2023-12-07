<script setup>
import { ref, reactive } from "vue";
import { getPokemon } from "../repository/repository";
import PokemonCard from "./PokemonCard.vue";

let pokemons = reactive([])
let isLoaded = ref(false)

async function getData() {
    pokemons = await getPokemon()
    isLoaded.value = true
}
getData()

</script>

<template>
  <section>
    <h2>List Pokemons</h2>
    <PokemonCard v-if="isLoaded" v-for="pokemon in pokemons" :pokemon="pokemon"/>
    <div v-else>Cargando </div>
  </section>
</template>
