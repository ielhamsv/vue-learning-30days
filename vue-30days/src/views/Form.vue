<script setup>
import {ref} from "vue"
const name=ref("")
const email=ref("")
function submitForm(){
  alert(`Submitted: ${name.value}, ${email.value}`)
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="name">
    <span v-if="!name">⚠️ Required</span>
    <br>
    <br>
    <input type="email" v-model="email" placeholder="email">
    <span v-if="!email">⚠️ Required</span>
    <br>
    <br>
    <button type="submit">submit</button>
  </form>
</template>

<style scoped>

</style>
