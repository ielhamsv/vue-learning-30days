<script setup>
import {ref} from "vue"
const NewTask=ref("")
const Tasks=ref([])
function AddTask(){
if (NewTask.value.trim()){
  Tasks.value.push(NewTask.value)
  NewTask.value=""
}
}
function RemoveTask(i){
Tasks.value.splice(i,1)
}

</script>

<template>
  <div class="container">
    <h1>Todo App</h1>
    <hr>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Task:</span>
      <input v-model="NewTask" placeholder="add your new task here..." type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
    </div>
    <button type="button" class="btn btn-primary" @click="AddTask">Add</button>
  </div>
  <div class="container">
    <hr>
    <h2>Your Tasks</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(task, i) in Tasks" :key="i">
        {{task}}
        <span class="badge text-bg-primary rounded-pill " @click="RemoveTask(i)">-</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
