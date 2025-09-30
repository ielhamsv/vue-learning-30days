<script setup>
import {ref,computed,watch} from "vue"
const Task=ref("")
const task=ref("")
const tasks=ref([])
function AddTask(){
  tasks.value.push({
    title:Task.value,
    done:false
  })
}

const CompletedTasks = computed(()=>{
    return tasks.value.filter(t=>t.done)
  }
)

watch(tasks,(val)=>{
  val.forEach((task,i)  =>{
    task.done ? alert(`Task ${i+1} is done!`) : ""
  })
},{ deep: true })

</script>

<template>
<div class="container">
  <h1>Task Manager</h1>
  <div class="row">
    <div class="col-md-6">
      <input type="text" v-model="Task" placeholder="add new task..." class="form-control">
      <button class="btn btn-primary" @click="AddTask">Add</button>
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-6">
          <h2>Not Done!</h2>
          <ol><li v-for="task in tasks" :style="{textDecoration: task.done ? 'line-through' : 'none'}">
            <input type="checkbox" v-model="task.done">
            {{task.title}}</li></ol>
        </div>
        <div class="col-md-6">
          <h2>Done!</h2>
          <ul><li v-for="task in CompletedTasks">{{task.title}}</li></ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
