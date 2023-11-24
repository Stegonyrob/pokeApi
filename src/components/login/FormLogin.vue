<script setup>
import { ref } from 'vue';

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

 
const gifUrl = ref('src/assets/img/Image20231124145247.gif')

</script>

<template>
  <section>
<div class="container-login container-xxl">
  <div class="col-12 col-md-6">
 <img :src="gifUrl" alt="Descripción del GIF" class="gift">
        </div>
  <div class="container ">
    <div class="col-12 col-ms-8">
  <img src="../../assets/img/Gengar icon 2.png" class=" my-icon  rounded-circle border border-5 rounded-5 " alt="Usuario">
        
  <div class="login-form border  border-5 rounded-5 ">
   
        <form @submit.prevent="login ">
            <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" v-model="email">
            </div>
            <div class="form-group  ">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>
        </div>
      </div>
    </div>
  </section>
</template>




<style lang="scss" scoped>
@import '@/assets/base.scss';


section{
 display: flex;
align-content: space-around;
justify-content: center;
direction:row ;
.container{ 
width: 30%;
 margin-left: 10%;
.login-form {
    margin-left: 27rem;
    margin-top: -22rem;
    padding: 2rem;
    background-color:rgb(255, 218,26,23%);
    border-color: #86b7fe !important;
    z-index: -1;
    width: 100%;
    align-items: center;
 
 
 img {
   width: 10rem;
   height: 10rem;
   object-fit: cover;
 
  }
 button{
    margin-bottom: 2rem;
    margin-left: 3rem;
 }
 .form-group {
  margin-top: 2.5rem;
  margin-bottom: 2rem;
 }
}
.my-icon{
  border-color:#86b7fe !important;
  background-color: white;
  margin-top: -45rem;
  margin-left: 31rem;
}
}
.gift{
  margin-left: 9rem;
}
}
</style>