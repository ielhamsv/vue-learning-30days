<script setup>
import {provide,ref} from "vue";
import inject from "@/components/Inject.vue";

const message=ref("hello from parent")
provide("msg",message)
</script>

<template>
<h2>parent</h2>
  <inject />
</template>

<style scoped>

</style>
