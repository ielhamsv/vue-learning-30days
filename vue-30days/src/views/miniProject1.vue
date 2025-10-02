<script setup>
import AddTask from "@/components/AddTask.vue";
import {ref} from "vue"
import Card from "@/components/Card.vue";
const status=ref(false)
const Tasks=ref([])
function handleAddTask(newTask){
  Tasks.value.push(newTask)
}
</script>

<template>
<div class="container">
  <h1>Todo App</h1>
  <hr>
  <button v-show="!status" class="btn btn-secondary p-2" @click="status=true">Add Task</button>
  <button v-show="status" class="btn btn-secondary p-2" @click="status=false">Cancel</button>
  <br>
  <AddTask @AddTask="handleAddTask" :isVisible="status"/>
</div>
  <section>
    <div class="container">
      <h1>Tasks</h1>
      <hr>
      <ol>
        <li v-for="(task,i) in Tasks">
          <Card>
            <template #header>{{task.Title}}</template>
            <template #default>{{task.Time}}</template>
            <template #footer><input type="checkbox" v-model="task.Status"><strong :style="{textDecoration: task.Status ? 'line-through' : 'none'}">Done!</strong></template>
          </Card>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>

</style>
