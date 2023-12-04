<script setup>
import { ref } from "vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonType from "../components/PokemonType.vue";

</script>

<template>
  <main>
    <h1>HomeView</h1>
    <PokemonType /> 
    <PokemonList />

       
    <ul>
      <!-- <UserCard v-for="user in users" v-bind:user="user" /> -->
      <!-- <li v-for="pokemon in pokemons">
        <span>{{ pokemon.name }}</span>
        <span>{{ pokemon.url }}</span>
      </li> -->
    </ul>
  </main>
</template>
