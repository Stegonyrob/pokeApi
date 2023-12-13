<script setup>
import ListFavorite from '../components/favorite/ListFavorite.vue';
import { ref, onMounted } from 'vue';
import AddElement from '../components/favorite/AddElement.vue';

const pokemonList = ref([]);

onMounted(() => {
    pokemonList.value = JSON.parse(localStorage.getItem('pokemonList')) || [];
});
</script>
<template>
  <div class="favorite">
     <ListFavorite id="favorite-list"/> 
  </div>
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
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#favorite-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 20px;
}
@media screen and (min-width: 480px) {
  #favorite-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
}
@media screen and (min-width: 768px) {
  #favorite-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 60px;
  }
}
@media screen and (min-width: 1300px) {
  #favorite-list {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 80px;
  }
}
</style>
