<script setup>
import {inject} from "vue"
const msg=inject("msg")
</script>

<template>
<h3>child</h3>
  <p>message: {{msg}}</p>
</template>

<style scoped>

</style>
