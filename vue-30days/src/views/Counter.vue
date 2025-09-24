<script setup>
import {ref} from "vue"
const count=ref(0)
</script>

<template>
  <div class="container">
    <h1>Counter: {{count}}</h1>
    <button @click="count++" class="btn btn-primary m-2 p-2">+</button>
    <br>
    <button @click="count--" class="btn btn-primary m-2 p-2">-</button>
  </div>
</template>

<style scoped>

</style>
