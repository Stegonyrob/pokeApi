<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  pokemon: Object,
});

let detailsPokemon = reactive({});
let detailsLoaded = ref(false);

async function getDetails() {
  const response = await fetch(props.pokemon.url);
  const data = await response.json();
  detailsPokemon = data;
  detailsLoaded.value = true;
}
getDetails();

async function getStats() {
  const response = await fetch(detailsPokemon);
  const data = await response.json();
  detailsStats = data.stats;
  detailsLoaded.value = true;
}
getStats();
</script>

<template>
  <div class="pokemon-base-card">
    <div class="pokemon-image-card">
      <img
        v-if="detailsLoaded"
        :src="
          detailsPokemon['sprites']['versions']['generation-v']['black-white'][
            'animated'
          ].front_default
        "
        alt="pokemon"
      />
    </div>
    <div class="pokemon-data-card">
      <div class="pokemon-health">
        <h2>{{ props.pokemon.name }}</h2>
        <hr />
        <h3>{{ detailsStats }} hp</h3>
      </div>
      <div v-show="detailsLoaded">{{ detailsPokemon.height }}</div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap");
.pokemon-base-card {
  width: 100%;
  border-radius: 20px;
  border: 2px solid rgb(106, 106, 106);
  background-color: rgb(251, 251, 251);
}
.pokemon-data-card {
  text-align: center;
  height: 120px;
}
.pokemon-image-card {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
img {
  width: 60%;
}
.pokemon-health {
  border-bottom: 1px solid black;
}
hr {
  width: 70%;
  height: 3px;
  background-color: rgb(26, 255, 0);
  border: 0;
}
h2 {
  font-size: 140%;
  font-family: "Pixelify Sans", sans-serif;
  margin: 1em;
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.309));
}
h3 {
  font-family: "Pixelify Sans", sans-serif;
  color: rgb(109, 109, 109);
}
</style>
