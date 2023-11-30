<script setup>
import {ref, reactive}  from "vue";

const props = defineProps ({
    pokemontype: Object,
});

let detailsType = reactive({});
let detailsLoaded = ref(false)

async function getTypeDetails() {
    const response = await fetch (props.pokemontype.url);
    const data = await response.json();
    detailsType = data;
    detailsLoaded.value = true
}
getTypeDetails()

</script>
<template>
    <div>
      <h3>Pokemons Type</h3>
      <div>
        <h2> Soy el tipo: {{ props.pokemontype.name }} con id {{ detailsType.id }} 
        </h2>
      </div>  

      <div v-show="detailsLoaded">{{ detailsType.height }}

      </div>
    </div>
</template>