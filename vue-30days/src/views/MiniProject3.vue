<script setup>
import {ref, onMounted } from "vue"
import {useTodoStore} from "@/stores/todoAPI.js";
const todo=useTodoStore()
const task=ref("")

onMounted(todo.loadTasks)
</script>

<template>
  <h2>Todo with API</h2>
  <input type="text" v-model="task" placeholder="add task...">
  <button @click="todo.addTasks(task)">Add</button>
  <hr>
  <ul>
    <li v-for="task in todo.tasks" :key="task.id">{{task.title}}</li>
  </ul>
</template>

<style scoped>

</style>
