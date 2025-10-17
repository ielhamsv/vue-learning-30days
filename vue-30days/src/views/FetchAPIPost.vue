<script setup>
import {ref,onMounted} from "vue"

const Name=ref("")
const users=ref([])

async function loadUser(){
  const res= await fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
  users.value=await res.json()
}
async function AddUser(){
const res= await fetch("https://jsonplaceholder.typicode.com/users",{
  method:"POST",
  body:JSON.stringify({name: Name.value}),
  headers: { "Content-Type": "application/json" }
})
  const newUser= await res.json()
  users.value.push(newUser)
}

async function DeleteUser(id){
  const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method: "DELETE",
  })
  users.value=users.value.filter(u => u.id !== id)
}

onMounted(loadUser)
</script>

<template>
<h2>Add User</h2>
  <input type="text" v-model="Name" placeholder="name">
  <button @click="AddUser">Add</button>
  <hr>
  <ul>
    <li v-for="user in users" :key="user.id">
    {{user.name}}
      <button @click="DeleteUser(user.id)">Delete</button>
    </li>
  </ul>
</template>

<style scoped>

</style>
