<script setup>
import {useTodostore} from "@/stores/todo.js";
import {ref} from "vue"

const task=ref("")
const todo = useTodostore()
</script>

<template>
<h1>Todo App</h1>
  <input type="text" v-model="task" placeholder="add new task">
  <button class="btn btn-primary" @click="todo.addTask(task)">Add</button>
  <hr>
  <ul>
    <li v-for="(task,i) in todo.todos" :key="i">
      <input type="checkbox"  @change="todo.toggletask(i)">
      <span :style="{textDecoration: task.done ? 'line-through' : 'none'}">{{task.title}}</span>
    </li>
  </ul>
</template>

<style scoped>

</style>
