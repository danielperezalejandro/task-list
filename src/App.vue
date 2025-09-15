<script setup>
</script>

<template>
  <div id="app">
    <!-- Aquí se cargarán las páginas según la ruta -->
    <router-view />
  </div>
</template>

<style>
/* App debe ocupar toda la pantalla */
#app {
  height: 100vh;   /* alto total de la pantalla */
  width: 100vw;    /* ancho total de la pantalla */
  display: flex;
  flex-direction: column;
}
</style>
