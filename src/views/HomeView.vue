<script setup>
import { ref } from "vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonType from "../components/home/PokemonType.vue";

</script>

<template>
  <main>
    <h1>HomeView</h1>
    <PokemonType /> 
    <PokemonList />

  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
</style>
