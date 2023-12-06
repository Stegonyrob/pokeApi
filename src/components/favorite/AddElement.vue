<script setup>

</script>

<template>
  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal">Add</button>

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
              <span class="input-group-text mt-5" id="addon-wrapping"><img src="../../assets/img/icon3 1.png" id="icon-pikachu" alt=""></span>
              <input type="text" class="form-control mt-5" name="Pokename" placeholder="Pokename" id="pokename" aria-describedby="addon-wrapping" v-model="pokename"> 
            </div>
            <div class="input-group container-sm px-5">
              <span class="input-group-text mt-5" id="addon-wrapping"><i class="bi bi-lightning-charge"></i></span>
                <input type="text" class="form-control mt-5" name="pokecharge" placeholder="Pokecharge" id="pokecharge" v-model="pokecharge">      
            </div>
            <div class="input-group container-sm px-5">
                <span class="input-group-text mt-5" id="addon-wrapping">H</span>
                <input type="text" class="form-control mt-5" name="pokeheight" placeholder="Pokeheight" id="pokeheight" aria-describedby="addon-wrapping" v-model="pokeheight">      
            </div>
            <div class="input-group container-sm px-5">
                <span class="input-group-text mt-5" id="addon-wrapping">W</span>
                <input type="text" class="form-control mt-5" name="pokeweight" placeholder="Pokeweight" id="pokeweight" aria-describedby="addon-wrapping" v-model="pokeweight">       
            </div>
            <div class="modal-footer mt-5">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-warning">Save changes</button>
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