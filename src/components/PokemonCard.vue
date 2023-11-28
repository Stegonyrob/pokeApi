<script setup>
import { ref, reactive, onBeforeMount } from "vue";

const props = defineProps({
  pokemon: Object,
});

let detailsPokemon = reactive({});

onBeforeMount(async () => {
  const response = await fetch(props.pokemon.url);
  const data = await response.json();

  detailsPokemon = await data;
});
</script>

<template>
  <div>
    <img :src="detailsPokemon.sprites.front_default" alt="" />
    <h2>Soy la card de {{ props.pokemon.name }}</h2>
    <div id="uri">{{ props.pokemon.url }}</div>
  </div>
</template>
