<script setup>
import {ref} from "vue"
const props= defineProps(["isVisible"])
const emit= defineEmits(["AddTask"])
const tasks=ref([])
const title=ref("")
const time=ref("")
const status=ref(false)
function AddTask(){
  const newTask = {
    Title: title.value,
    Time: time.value,
    Status: status.value
  }
  emit("AddTask", newTask)
}
</script>

<template>
<div class="container" v-show="isVisible">
  <input type="text" v-model="title" placeholder="Task title"><br>
  <input type="text" v-model="time" placeholder="Time title"><br>
  <input type="checkbox" v-model="status"><br>
  <button class="btn btn-secondary p-2" @click="AddTask">Add</button>
</div>
</template>

<style scoped>

</style>
