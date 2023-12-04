<script setup>
import PopFavorite from "../components/favorite/PopFavorite.vue";
</script>
<template>
    <div class="favorite">
      <h1>tus favoritos</h1>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Añadir
</button>

      <PopFavorite/>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  