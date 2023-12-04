<script setup>
import { useAuthStore } from '@/store/auth.js';

const auth = useAuthStore();
</script>

<template>
  <div>
    <form @submit.prevent="auth.login">
      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="auth.username" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="auth.password" required>

      <button type="submit">Iniciar sesión</button>
    </form>

    <div v-if="auth.isAuthenticated">
      <p>Bienvenido, {{ auth.username }}!</p>
      <button @click="auth.logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<style lang="scss">
/* Estilos opcionales para el formulario */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  label {
    margin-top: 10px;
  }

  input {
    margin-top: 5px;
    padding: 5px;
  }

  button {
    margin-top: 10px;
  }
}
</style>
