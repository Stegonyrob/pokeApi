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
      <div id="checkFilter" v-for="type in typesPokemon" :key="type.name" >
        <input type="checkbox" v-model="typesPokemon.type" :value="type.name" />
        {{ type.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 #Title {
  color: rgb(255, 0, 217);
 }

 #boxFilter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: rgb(2, 42, 5);
 }

 #checkFilter {
  margin: 1%;
 }
  </style>