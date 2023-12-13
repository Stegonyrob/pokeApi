<script setup>
import { ref, onMounted } from 'vue';

const pokemonList = ref([]);

onMounted(() => {
    pokemonList.value = JSON.parse(localStorage.getItem('pokemonList')) || [];
});
</script>


<template>
  <div>
    <div v-if="pokemonList.length > 0">
      <h3>Listado de Pokémon:</h3>
      <ul>
        <li v-for="(pokemon, index) in pokemonList" :key="index">
          <img :src="pokemon.photo" alt="Foto de Pokémon" style="width: 50px; height: 50px;">
          <span>Nombre: {{ pokemon.name }}</span>
          <span>Carga: {{ pokemon.charge }}</span>
          <span>Altura: {{ pokemon.height }}</span>
          <span>Peso: {{ pokemon.weight }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No hay Pokémon guardados.</p>
    </div>
  </div>
</template>

