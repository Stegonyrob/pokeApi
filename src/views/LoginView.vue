<script setup>
import FormLogin from '../components/login/FormLogin.vue'
</script>
<template>
    <div class="login">
      <h1>estas logueado</h1>
      <FormLogin/>
    </div>
  </template>
  
  <style lang="scss" scoped>
@import '@/assets/variables.scss';

.login {
  background-color: $primary-color;
}

  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  