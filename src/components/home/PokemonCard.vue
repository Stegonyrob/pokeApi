<script setup>

import { useFavoritesStore } from './../../stores/favoritesStore';
import { ref, reactive, watch } from "vue";
import "../../assets/icon-style.scss";

const props = defineProps({
  pokemon: Object,
});
let detailsPokemon = reactive({});
let detailsLoaded = ref(false);
let isFavorite = ref(false);

let pokemonImageUrl = ref("");
const typePokemon = ref([
  {
    name: "bug",
    image: "../../assets/icons/bug.svg",
  },
  {
    name: "dark",
    image: "../../assets/icons/dark.svg",
  },
  {
    name: "dragon",
    image: "../../assets/icons/dragon.svg",
  },
  {
    name: "electric",
    image: "../../assets/icons/electric.svg",
  },
  {
    name: "fairy",
    image: "../../assets/icons/fairy.svg",
  },
  {
    name: "fighting",
    image: "../../assets/icons/fighting.svg",
  },
  {
    name: "fire",
    image: "../../assets/icons/fire.svg",
  },
  {
    name: "flying",
    image: "../../assets/icons/flying.svg",
  },
  {
    name: "ghost",
    image: "../../assets/icons/ghost.svg",
  },
  {
    name: "grass",
    image: "../../assets/icons/grass.svg",
  },
  {
    name: "ground",
    image: "../../assets/icons/ground.svg",
  },
  {
    name: "ice",
    image: "../../assets/icons/ice.svg",
  },
  {
    name: "normal",
    image: "../../assets/icons/normal.svg",
  },
  {
    name: "poison",
    image: "../../assets/icons/poison.svg",
  },
  {
    name: "psychic",
    image: "../../assets/icons/psychic.svg",
  },
  {
    name: "rock",
    image: "../../assets/icons/rock.svg",
  },
  {
    name: "steel",
    image: "../../assets/icons/steel.svg",
  },
  {
    name: "water",
    image: "../../assets/icons/water.svg",
  },
  {
    name: "rock",
    image: "../../assets/icons/rock.svg",
  },
]);

async function getDetails() {
  const response = await fetch(props.pokemon.url);
  const data = await response.json();
  detailsPokemon = data;
  detailsLoaded.value = true;
}
getDetails();

/* function getType() {
  if (detailsLoaded.value) {
    if (detailsPokemon.types && detailsPokemon.types.length > 0) {
      const primaryType = detailsPokemon.types[0].type.name;
      const foundType = typePokemon.value.find(
        (type) => type.name === primaryType
      );
      if (foundType) {
        pokemonImageUrl.value = foundType.image;
        console.log("Pokemon Image URL:", pokemonImageUrl.value);
      } else {
        console.error("Tipo no encontrado en typePokemon");
      }
    } else {
      console.error("No se encontraron tipos para el Pokemon");
    }
  } else {
    console.error("Los detalles del Pokemon no se han cargado todavía");
  }
}

watch(detailsLoaded, (newVal) => {
  if (newVal) {
    getType(); // Llamar a getType cuando detailsLoaded cambie a true
  }
}); */


const favoritesStore = useFavoritesStore();

function toggleFavorite() {
 isFavorite.value = !isFavorite.value;
 if (isFavorite.value) {
   favoritesStore.addFavorite(detailsPokemon);
 } else {
   favoritesStore.removeFavorite(detailsPokemon);
 }
}

getDetails();


</script>
<template>
  <div class="pokemon-base-card">
    <div class="pokemon-header-card">#{{ detailsPokemon.id }}</div>
    <div class="pokemon-image-card">
      <img
        v-if="detailsLoaded"
        :src="
          detailsPokemon['sprites']['versions']['generation-v']['black-white'][
            'animated'
          ].front_default
        "
        alt="pokemon"
      /> <i class="bi bi-heart-fill favorite-button"
          :class="{ 'favorite-selected': isFavorite }"
          @click="toggleFavorite" ></i>
    </div>
    <div class="pokemon-data-card">
      <div v-if="detailsLoaded" class="name">
        <h2>{{ props.pokemon.name }}</h2>
        <div class="pokemon-health">
          <hr />
          <h3>{{ detailsPokemon.stats["0"].base_stat }} hp</h3>
        </div>
      </div>
      <div class="pokemon-stats">
        <div v-if="detailsLoaded" class="pokemon-type">
          <p :class="detailsPokemon.types[0].type.name">
            {{ detailsPokemon.types[0].type.name }}
          </p>
          <p
            v-if="detailsPokemon.types[1] && detailsPokemon.types[1].type.name"
            :class="detailsPokemon.types[0].type.name"
            class="icon"
          >
            {{ detailsPokemon.types[1].type.name }}
          </p>
          <p
            v-if="detailsPokemon.types[2] && detailsPokemon.types[2].type.name"
            :class="detailsPokemon.types[0].type.name"
          >
            {{ detailsPokemon.types[2].type.name }}
          </p>
        </div>
        <div class="border" v-if="detailsLoaded">
          {{ detailsPokemon.stats["1"].base_stat }} attack
        </div>
        <div v-if="detailsLoaded">{{ detailsPokemon.height }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap");
.pokemon-header-card {
  margin-left: 10px;
  margin-top: 2px;
  font-family: "Pixelify Sans", sans-serif;
  color: rgb(85, 106, 84);
  font-size: 15px;
}
.pokemon-base-card {
  width: 100%;
  height: 350px;
  border-radius: 20px;
  border: 2px solid rgb(106, 106, 106);
  background-color: rgb(251, 251, 251);
}
.pokemon-image-card {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  > img {
    width: 60%;
  }
}

.pokemon-data-card {
  text-align: center;
  height: 120px;

  .name {
    height: 50%;

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
    }
    h3 {
      font-family: "Pixelify Sans", sans-serif;
      color: rgb(85, 106, 84);
      font-size: 15px;
    }
  }
}

.pokemon-health {
  border-bottom: 1px solid black;
}
.pokemon-stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 50%;

  div {
    width: 100%;
  }
}
.pokemon-type {
  display: flex;
  justify-content: center;

  > p {
    margin: 5px;
    border-radius: 4px;
    padding: 3px;
    border: 1px border black;
  }
}
.border {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 100%;
}

@media screen and (max-width: 700px) {
  .pokemon-base-card {
    height: 230px;
  }

  .pokemon-image-card {
    height: 100px;

    img {
      width: 35%;
    }
  }
}
#pokemonType {
  display: flex;
  justify-content: space-around;
}

.favorite-button {
 margin-top: -10rem;
 color: rgb(98, 88, 88);
}

.favorite-button.favorite-selected {
 color: red;
 fill: red;
}



</style>
