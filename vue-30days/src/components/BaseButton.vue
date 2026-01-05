<script setup>

</script>

<template>
  <button class="btn"><slot /></button>
</template>

<style scoped>
.btn{
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background: #42b883;
  color: white;
  cursor: pointer;
}
</style>
