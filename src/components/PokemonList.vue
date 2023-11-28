<script setup>
import { ref, onBeforeMount } from "vue";
import PokemonCard from "./PokemonCard.vue";
import { pokemonResults } from "./repository/repository";
import { usePokemonStore } from "@/stores/PokemonStore.js";

const pokemonName = ref("Bulbasur");

const store = usePokemonStore();

store.getPokemons();
</script>

<template>
  <section>
    <h2>List Pokemons</h2>
    <PokemonCard v-for="pokemon in store.pokemons" :pokemon="pokemon" />
  </section>
</template>
