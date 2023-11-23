<script setup>
// import { ref } from 'vue';

// export default {
//  setup() {
//    const email = ref('');
//    const password = ref('');

//    const login = () => {
//      // Aquí va tu lógica de inicio de sesión
//    };

//    return { email, password, login };
//  },
// };



</script>

<template>
  <div class="login-form border border-primary border-5 rounded-5  ">
   
        <img src="../../assets/img/Gengar icon 2.png" class="rounded-circle border border-primary border-5 rounded-5 " alt="Usuario">
        <form @submit.prevent="login">
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" v-model="email">
            </div>
            <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>
  
        </div>

</template>




<style lang="scss" scoped>
@import '@/assets/base.scss';

.bg-header {
 background: $gradient;
}
.login-form {
 position: absolute;
 top: 50%;
 right: 20%;
 transform: translateY(-50%);
 width: 30%;
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: yellow;
 
 img {
   width: 10rem;
   height: 10rem;
   object-fit: cover;
   margin-bottom: 8rem;
  }
 button{
    margin-bottom: 2rem;
    margin-left: 2.5rem;
 }
 .form-group {
   margin-bottom: 2rem;
 }
}
</style>