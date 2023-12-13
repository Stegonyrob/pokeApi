<script setup>


import { ref } from "vue";
import PokemonList from "../components/home/PokemonList.vue";
import PokemonType from "../components/home/PokemonType.vue";
</script>
<template>

    
  <main>
    <div>
      <PokemonType />
    </div>
    <div>
      <br>
    </div>
    <section>
      <PokemonList id="pokemon-list" />
    </section>
   
  </main>
</template>

<style lang= "scss" scoped>
@import "../assets/main.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#pokemon-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 20px;
}

@media screen and (min-width: 700px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
}
@media screen and (min-width: 1170px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
}
@media screen and (min-width: 1600px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
  }
}
@media screen and (min-width: 2000px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 60px;
  }
}
</style>
