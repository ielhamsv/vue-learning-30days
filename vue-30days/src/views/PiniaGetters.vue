<script setup>
import {useTodostore} from "@/stores/todo.js";
import PiniaActions from "@/views/PiniaActions.vue";
const todo = useTodostore()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <PiniaActions/>
      </div>
      <div class="col-md-6">
        <h3>total: {{todo.total}}</h3>
        <h3>done: {{todo.donecount}}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
