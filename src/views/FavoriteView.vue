<script setup>
import { ref, onMounted } from 'vue';
import AddElement from '../components/favorite/AddElement.vue';

const pokemonList = ref([]);

onMounted(() => {
    pokemonList.value = JSON.parse(localStorage.getItem('pokemonList')) || [];
});

</script>

<template>
  <div>
    <div v-if="pokemonList.length > 0">
      <h3>Pokémon List:</h3>
      <ul>
        <li v-for="(pokemon, index) in pokemonList" :key="index">
          <img :src="pokemon.photo" alt="Poképhoto" style="width: 50px; height: 50px;">
          <span>Name: {{ pokemon.name }}</span>
          <span>Charge: {{ pokemon.charge }}</span>
          <span>Height: {{ pokemon.height }}</span>
          <span>Weight: {{ pokemon.weight }}</span>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>No Pokémon added</p>
    </div>

    <AddElement/>

  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';
</style>