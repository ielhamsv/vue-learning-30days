<script setup>
import {ref} from "vue"
const task=ref("")
const tasks=ref([])
const emit= defineEmits(["addTask"])

function addTask(){
  tasks.value.push(task)
  emit("addTask",tasks.value)
}

</script>

<template>
<div class="container">
  <h1>Child Component</h1>
  <input type="text" class="form-control" v-model="task">
  <button class="btn btn-primary" @click="addTask">Add</button>
</div>
</template>

<style scoped>

</style>
