<script setup>
defineProps(["items"])

</script>

<template>
  <h1>Child Component</h1>
  <ul>
    <li v-for="(item,i) in items">{{item}}</li>
  </ul>
</template>

<style scoped>

</style>
