<script setup>
import EmitterChild from "@/components/EmitterChild.vue";
import {ref} from "vue"
const Tasks=ref([])
function handleAddTask(tasks){
  Tasks.value=tasks
}
</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <EmitterChild @addTask="handleAddTask" />
    </div>
    <div class="col-md-6">
      <h1>Parent Component</h1>
      <ul>
        <li v-for="task in Tasks">{{task}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
