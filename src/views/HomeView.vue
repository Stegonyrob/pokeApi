<script setup>
import { ref } from "vue";
import PokemonList from "../components/PokemonList.vue";

const users = ref([
  { name: "Romo", email: "romo@gmail.com" },
  { name: "Tom", email: "tom@gmail.com" },
]);
</script>

<template>
  <main>
    <h1>HomeView</h1>
    <PokemonList />
  </main>
</template>
