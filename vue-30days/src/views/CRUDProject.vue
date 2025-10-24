<script setup>
import {onMounted} from "vue";
import {useCRUDStore} from "@/stores/CRUDProject.js";
const CRUD=useCRUDStore()

onMounted(CRUD.loadTasks)
onMounted(CRUD.loadUsers)
</script>

<template>
<h1>CRUD</h1>
  <h3>username:</h3>
  <input type="text" v-model="CRUD.username" placeholder="username">
  <input type="text" v-model="CRUD.task" placeholder="to do...">
  <button class="btn btn-primary" @click="CRUD.AddUser">Add User</button>
  <hr>

  <div class="row">
    <div class="col-md-6">
      <ul>
        <li v-for="user in CRUD.users" :key="user.id">
          {{user.name}}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <ul>
        <li v-for="task in CRUD.tasks" :key="task.id">
          {{task.title}}
          <button @click="CRUD.Delete(task.id)">DELETE</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
