<script setup>
import { ref, onMounted } from 'vue';

const pokephoto = ref('');
const pokename = ref('');
const pokecharge = ref('');
const pokeheight = ref('');
const pokeweight = ref('');

const saveData = () => {
    const newPokemon = {
        photo: pokephoto.value,
        name: pokename.value,
        charge: pokecharge.value,
        height: pokeheight.value,
        weight: pokeweight.value
    };

    let pokemonList = JSON.parse(localStorage.getItem('pokemonList')) || [];
    pokemonList.push(newPokemon);

    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
    alert('Pokémon agregado!');

    // Opcional: Limpiar el formulario después de guardar
    pokephoto.value = '';
    pokename.value = '';
    pokecharge.value = '';
    pokeheight.value = '';
    pokeweight.value = '';
};

// Opcional: Cargar datos existentes al iniciar
const loadData = () => {
    // Carga datos si necesitas hacer algo con ellos al iniciar
};

onMounted(loadData);

</script>

<template>
  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal">Add Pokémon</button>

  <div class="modal" tabindex="-1" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="my-icon border  border-1 rounded-circle">
                    <img src="../../assets/img/psyduck icon.png" alt="psyduck">
                </div>
                <button type="button" class="btn-close btn btn-outline-warning rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="input-group container-sm px-5">
                <span class="input-group-text mt-5" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12"/>
                </svg></span>
                <input type="text" class="form-control mt-5" name="pokephoto" placeholder="Add Poképhoto URL" id="pokephoto" aria-describedby="addon-wrapping" v-model="pokephoto">       
            </div>
            <div class="input-group container-sm px-5">
              <span class="input-group-text mt-5" id="addon-wrapping"><img src="../../assets/img/icon3 1.png" id="icon-pikachu" alt="" height="33"></span>
              <input type="text" class="form-control mt-5" name="Pokename" placeholder="Pokéname" id="pokename" aria-describedby="addon-wrapping" v-model="pokename"> 
            </div>
            <div class="input-group container-sm px-5">
              <span class="input-group-text mt-5" id="addon-wrapping"><i class="bi bi-lightning-charge"></i></span>
                <input type="text" class="form-control mt-5" name="pokecharge" placeholder="Pokécharge" id="pokecharge" v-model="pokecharge">      
            </div>
            <div class="input-group container-sm px-5">
                <span class="input-group-text mt-5" id="addon-wrapping">h</span>
                <input type="text" class="form-control mt-5" name="pokeheight" placeholder="Pokéheight" id="pokeheight" aria-describedby="addon-wrapping" v-model="pokeheight">      
            </div>
            <div class="input-group container-sm px-5">
                <span class="input-group-text mt-5" id="addon-wrapping">w</span>
                <input type="text" class="form-control mt-5" name="pokeweight" placeholder="Pokéweight" id="pokeweight" aria-describedby="addon-wrapping" v-model="pokeweight">       
            </div>
            <div class="modal-footer mt-5">
              <button type="button" class="btn btn-warning" @click="saveData">Save changes</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
      </div>
  </div>
</template>


<style lang="scss" scoped>
.modal-content {
    margin-top: 8rem;
  .my-icon{ 

    margin-top: -5rem;
    margin-left: 10rem;
    background-color: white;
  }
  
  img {
    width: 9rem;
  }
  
  span {
    font-size: 1.8rem;
    width: 3.5rem;
    height: 3.5rem;
    justify-content: space-around;
  }
}

</style>



