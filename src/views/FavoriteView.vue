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
  <section class="container">
  <div class="favorite grid-container">
     <ListFavorite id="favorite-list"/> 
  </div>
  <div class="add-pokemon">
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
</section>
</template>
<style scoped>
.grid-container{
  display: flex;
  flex-wrap: wrap;
  width: 50%;
 gap: 5rem;
  
}
#favorite-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 20px;
}
section {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.add-pokemon{
  margin-left: 25%;
}
</style>
