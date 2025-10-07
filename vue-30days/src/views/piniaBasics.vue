<script setup>
import {useCounterStore} from "@/stores/counter.js";
const counter=useCounterStore()
</script>

<template>
<h1>counter: {{counter.count}}</h1>
  <button @click="counter.increament">+</button>
</template>

<style scoped>

</style>
