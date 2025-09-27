<script setup>
import {ref} from "vue"
const islogged=ref(false)
const username=ref("")
const age=ref("")
const city=ref("")
const items=ref([])

function Login(){
  if(username && city && age ===""){
    alert("error! fill all the blanks.")
  }else {
    islogged.value=true
    items.value.push(username,city,age)
  }
}
</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1 v-if="islogged">Wellcome {{username}}!</h1>
      <h1 v-else>Please Login.</h1>
    </div>
    <div class="col-md-6">
      <input class="form-control" v-model="username" placeholder="username">
      <input class="form-control" v-model="age" placeholder="age">
      <input class="form-control" v-model="city" placeholder="city">
      <button class="btn btn-primary" @click="Login">login</button>
    </div>
  </div>
</div>
  <div class="container">
    <ul>
      <li v-for="(item,i) in items" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
