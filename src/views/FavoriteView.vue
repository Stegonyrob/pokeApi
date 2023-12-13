<script setup>
import ListFavorite from '../components/favorite/ListFavorite.vue';
</script>
<template>
  <div class="favorite">
     <ListFavorite id="favorite-list"/> 
  </div>
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
#favorite-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 20px;
}
@media screen and (min-width: 480px) {
  #favorite-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
}
@media screen and (min-width: 768px) {
  #favorite-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 60px;
  }
}
@media screen and (min-width: 1300px) {
  #favorite-list {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 80px;
  }
}
</style>
