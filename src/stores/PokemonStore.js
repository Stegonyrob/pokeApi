import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { getPokemon } from "../components/repository/repository";

export const usePokemonStore = defineStore("pokemon", () => {
  let pokemons = reactive([]);

  async function getPokemons() {
    pokemons = await getPokemon();
  }

  return { pokemons, getPokemons };
});
