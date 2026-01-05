<script setup>
import {useCounter} from "@/composables/useCounter.js";
const { count, inc, dec } = useCounter()
</script>

<template>
<p>count: {{count}}</p>
  <button @click="inc">increase</button>
  <button @click="dec">decrease</button>
</template>

<style scoped>

</style>
