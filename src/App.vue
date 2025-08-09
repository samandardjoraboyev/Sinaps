<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-1 px-16 bg-gray-100">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
