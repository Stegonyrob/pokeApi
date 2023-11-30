<script setup>
import {ref, reactive}  from "vue";
import {getType} from "./repository/respositoryFilter";
import  PokemonFilter  from "./PokemonFilter.vue";

let pokemonsTypes = reactive([])
let isLoaded = ref(false)

async function getData() {
    pokemonsTypes = await getType()
    isLoaded.value = true
}
getData()

</script>

<template>
    <div>
        <h2>Pokemons type</h2>
        <PokemonFilter v-if="isLoaded" v-for="pokemonType in pokemonsTypes" :pokemonType="pokemonType"/>

        <div v-else>Cargando</div>

    </div>
</template>