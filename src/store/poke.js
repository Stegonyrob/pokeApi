import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePokeStore = defineStore('poke', () => {
  const user = ref([
    {



    }
    ]);

    return { user };
  });
  