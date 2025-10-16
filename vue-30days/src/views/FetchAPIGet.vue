<script setup>
import {ref} from "vue"
const users=ref([])

async function FetchUser(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  users.value = await res.json()
}
</script>

<template>
<h1>Users</h1>
  <button @click="FetchUser">load</button>
  <ul>
    <li v-for="(user) in users" :key="user.id">{{user.name}}</li>
  </ul>
</template>

<style scoped>

</style>
