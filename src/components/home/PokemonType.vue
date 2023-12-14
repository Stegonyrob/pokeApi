<script setup>
import { ref, reactive } from "vue";

let typesPokemon = reactive({});
let detailsLoaded = ref(false);
const uri = import.meta.env.VITE_API_ENDPOINT_POKEMON_TYPE;

async function getDetails() {
  const response = await fetch(uri);

  const data = await response.json();
  typesPokemon = data.results;
  detailsLoaded.value = true;
}
getDetails();
</script>

<template>
  <div>
    <h3 id="Title">Poke type</h3>

    <div v-if="detailsLoaded"></div>
    
    <div id="boxFilter">
      <div id="checkFilter" v-for="pokemonType in typesPokemon">
        <input :name="pokemonType.name" type="checkbox" v-model="typesPokemon.type" :value="pokemonType.name" />
        <label class="filterName" :for="pokemonType.name">{{ pokemonType.name }} </label>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/main.scss";

#Title {
  color: rgb(255, 0, 217);
}

#boxFilter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: rgb(18, 18, 18, 0.8);
  font-family: $font-pixel;
  font-size: 1em;
  border: 1px solid $primary-color;
  border-radius: 10px;
  margin-left: 10%;
  margin-right: 10%;
}

#checkFilter {
  margin: 1%;
  .todos {
  display: flex;
  justify-content: center;
  align-items: center;
}
  .filterName {
    padding-left: 1em;
    justify-content: center;
  }
  input[type="checkbox"]:checked + label {
    color: #be2b5fc8;
    content: #be2b5fc8;
    
}



}

</style>