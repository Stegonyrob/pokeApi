<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  type: Object,
});

let typesPokemon = reactive({});
let detailsLoaded = ref(false)

async function getDetails() {
  const response = await fetch(props.type.url);
  const data = await response.json();
  typesPokemon = data;
  detailsLoaded.value = true
}
getDetails()

</script>

<template>
  <div>
    <h3>Poke type</h3>
    <img v-if="detailsLoaded" :src="detailsPokemon.sprites.front_default" alt="pokemon" />
    <div>
      <h2>Soy del tipo {{ props.type.name }} con id {{ detailsPokemon.id }} </h2>
      <div id="uri">{{ props.type.url }}</div>
    </div>

    <div v-show="detailsLoaded">{{ detailsPokemon.height }}</div>
  </div>
</template>