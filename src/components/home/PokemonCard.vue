<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  pokemon: Object,
});

let detailsPokemon = reactive({});
let detailsLoaded = ref(false)
let favorites = reactive([]);
async function getDetails() {
  const response = await fetch(props.pokemon.url);
  const data = await response.json();
  detailsPokemon = data;
  detailsLoaded.value = true
}
function addToFavorites() {
 if (!favorites.includes(props.pokemon)) {
   favorites.push(props.pokemon);
 }
}
getDetails()

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
      <div>
        <h2>{{ props.pokemon.name }}</h2>
        <div class="pokemon-health">
          <hr />
          <h3>{{ detailsPokemon.stats["0"].base_stat }} hp</h3>
        </div>
      </div>
      <div class="pokemon-stats">
        <div v-show="detailsLoaded">
          <img
            v-if="detailsLoaded"
            :src="
              detailsPokemon['types']['0']['type']['url']['animated']
                .front_default
            "
            alt="pokemon"
          />
          <img
            v-if="detailsLoaded"
            :src="
              detailsPokemon['types']['1']['type']['url']['animated']
                .front_default
            "
            alt="pokemon"
          />
        </div>
        <div v-show="detailsLoaded">
          {{ detailsPokemon.stats["1"].base_stat }} attack
        </div>
        <div v-show="detailsLoaded">{{ detailsPokemon.height }}</div>
      </div>
    </div>
  </div>


    <div><i class="bi bi-heart btn btn-outline-danger" @click="addToFavorites"></i></div>
   
 
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
.pokemon-stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.pokemon-stats > div {
  width: 100%;
  height: 100%;
  background-color: aqua;
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
  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.309));
  margin-top: 10px;
}
h3 {
  font-family: "Pixelify Sans", sans-serif;
  color: rgb(85, 106, 84);
  font-size: 15px;
  margin-bottom: 10px;
}
</style>
