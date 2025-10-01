<script setup>

</script>

<template>
<div class="card" style="width: 18rem;">
  <header><slot name="header"/> </header>
  <main><slot></slot></main>
  <footer><slot name="footer" /> </footer>
</div>
</template>

<style scoped>

</style>
