<script setup>
import Card from "@/components/Card.vue";
import BaseButton from "@/components/BaseButton.vue";
import {useCartStore} from "@/stores/Cart.js";
const cart=useCartStore()
</script>

<template>
<h2>Cart 🛒</h2>
  <ul>
    <li v-for="item in cart.items" :key="item.id">
      <Card>
        <template #header>{{item.title}}</template>
        <p>{{item.price}}</p>
        <template #footer><button @click="cart.remove(item.id)" class="btn btn-primary">delete</button></template>
      </Card>
    </li>
  </ul>

  <BaseButton> total: {{cart.total}}</BaseButton>
</template>

<style scoped>

</style>
