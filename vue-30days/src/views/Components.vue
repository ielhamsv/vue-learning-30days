<script setup>
import {ref} from "vue"
import ChildComp from "@/views/ChildComp.vue";
const Name=ref("")
const LastName=ref("")
const items = ref([])
</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1>Parent Component</h1>
      <input type="text" class="form-control" v-model.lazy="Name" placeholder="name">
      <input type="text" class="form-control" v-model.lazy="LastName" placeholder="lastname">
    </div>
    <div class="col-md-6">
      <ChildComp :items="[Name,LastName]" />
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
