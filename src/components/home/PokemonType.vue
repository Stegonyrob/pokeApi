<script setup>
import { ref, reactive } from "vue";

let typesPokemon = reactive({});
let detailsLoaded = ref(false);

async function getDetails() {
  const response = await fetch("https://pokeapi.co/api/v2/type");

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
@import "../../assets/variables";

#Title {
  color: rgb(255, 0, 217);
}

#boxFilter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: rgb(18, 18, 18, 0.8);
  font-family: $font-pixel;
  border: 1px solid $primary-color;
  border-radius: 10px;
}

#checkFilter {
  margin: 1%;
  .filterName {
    padding-left: 1em;
  }
  input[type="checkbox"]:checked + label {
    color: #be2b5fc8;
    content: #be2b5fc8;
}
}

</style>