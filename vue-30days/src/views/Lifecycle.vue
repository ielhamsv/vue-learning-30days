<script setup>
import {ref,onMounted} from "vue"
const users=ref([])
async function fetchUsers(){
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  users.value= await res.json()
}

onMounted(fetchUsers)
</script>

<template>
<h2>Users</h2>
  <ol>
    <li v-for="user in users">{{user.name}}</li>
  </ol>
</template>

<style scoped>

</style>
