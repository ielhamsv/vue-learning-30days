<script setup>

import Card from "@/components/Card.vue";
</script>

<template>
<Card>
  <template #header>
    <h3>product 1</h3>
  </template>
  <p>This is the description of the product1...</p>
  <template #footer>
    <button class="btn btn-primary">buy</button>
  </template>
</Card>
  <Card>
    <template #header>
      <h3>product 2</h3>
    </template>
    <p>This is the description of the product2...</p>
    <template #footer>
      <button class="btn btn-primary">buy</button>
    </template>
  </Card>
  <Card>
    <template #header>
      <h3>product 3</h3>
    </template>
    <p>This is the description of the product3...</p>
    <template #footer>
      <button class="btn btn-primary">buy</button>
    </template>
  </Card>
</template>

<style scoped>

</style>
