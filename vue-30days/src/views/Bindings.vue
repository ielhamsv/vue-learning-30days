<script setup>
import {ref} from "vue"
const Bgcolor=ref("black")
const Tcolor=ref("white")

function Change(){
  Bgcolor.value=Bgcolor.value=="black" ? "red" : "black"
  Tcolor.value=Tcolor.value=="white" ? "black" : "white"
}
</script>

<template>
<div class="container">
  <div :style="{backgroundColor:Bgcolor}">
    <h1 :style="{color:Tcolor}">Dynamic Style</h1>
  </div>
  <button class="btn btn-primary" @click="Change">change</button>
</div>
</template>

<style scoped>

</style>
