<script setup>
import { ref } from "vue";
import PokemonList from "../../src/components/home/PokemonList.vue";
</script>

<template>
  <main>
    <section>
      <PokemonList id="pokemon-list" />
    </section>
  </main>
</template>

<style scoped>
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
@media screen and (min-width: 480px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
}
@media screen and (min-width: 768px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 60px;
  }
}
@media screen and (min-width: 1300px) {
  #pokemon-list {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 80px;
  }
}
</style>
