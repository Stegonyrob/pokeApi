<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/home/Header.vue'
import Footer from '@/components/home/Footer.vue'
</script>

<template>
 <Header>
 
 </Header>
 <nav>
        <RouterLink to="/">Home /  </RouterLink>
        <RouterLink to="/login">Login / </RouterLink> 
        <RouterLink to="/favorite">Favorite</RouterLink>
       
    </nav>

   
    <RouterView /> 
    <Footer></Footer>   
</template>

<style lang="scss" scoped>

</style>

