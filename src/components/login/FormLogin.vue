<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
const gifUrl = ref('src/assets/img/Image20231124145247.gif');
const username = ref('')
const password = ref('')
const route = useRoute()
const router = useRouter()
const store = useAuthStore()

function login() {

if (username.value == store.user.username) {
    store.user.isAuthenticated = true
    const redirectPath = route.query.redirect || '/favorite'
    router.push(redirectPath)
}
}
</script>
<template>
  <section>
    <div>
      <div class="gift">
        <img :src="gifUrl" alt="Descripción del GIF">
      </div>
      <section class="container border  border-5 rounded-5">
        <div class="my-icon border  border-5 rounded-circle">
          <img src="../../assets/img/Gengar icon 2.png" alt=" pokemon">
        </div>
        <form @submit.prevent="login">
          <div class="input-group container-lg ">
            <span class="input-group-text mt-5" id="addon-wrapping"><img src="../../assets/img/icon3 1.png"
                id="icon-pikachu" alt=""></span>
            <input type="text" class="form-control mt-5" name="username" placeholder="Username" id="username"
              aria-describedby="addon-wrapping" v-model="username">
          </div>
          <div class="input-group container-lg">
            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-key"></i></span>
            <input type="password" name="password" class="form-control" placeholder="Password" id="password"
              aria-describedby="addon-wrapping" v-model="password">
          </div>
          <button type="submit" class="btn btn-outline-warning">Login</button>
        </form>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>

section {
  display: flex;
  align-content: space-around;
  justify-content: center;
  direction: row;
  
  .container {
    background-color: rgb(255, 218, 26, 23%);
    border-color: #86b7fe !important;
    z-index: -1;
    align-items: center;
    margin-top: -80%;
    margin-right: -40%;
    
    .input-group {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    }
    
    button {
      margin-left: 7rem;
      margin-bottom: 2rem;
    }

    #icon-pikachu {
      width: 1rem;
      height: auto;
    }
  }

  .my-icon {
    border-color: #86b7fe !important;
    background-color: white;
    margin-top: -18rem;
    margin-left: 1rem;
    position: absolute;
  }

  .gift {
    margin-left: -15rem;
  }
}

// Media queries para pantallas con ancho máximo de 750px
@media screen and (max-width: 750px) {
  section {
    flex-direction: column;
    max-width: 80%;
    justify-content: center;
    .container {
      margin:auto;
    }

    .my-icon {
      margin-top: -5rem;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      position: static;
    }

    .gift {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5rem;
    }
  }
}
</style>
