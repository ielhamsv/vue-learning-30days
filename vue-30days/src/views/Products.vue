<script setup>
import Card from "@/components/Card.vue";
import {ref,onMounted} from "vue";
import {useCartStore} from "@/stores/Cart.js";
const cart= useCartStore()
const products=ref([])

onMounted(async ()=>{
  const res = await fetch("https://fakestoreapi.com/products?limit=5")
  products.value=await res.json()
})
</script>

<template>
<h2>Products</h2>
  <ul>
    <li v-for="p in products" :key="p.id">
      <Card>
        <template #header>{{p.title}}</template>
        <p>{{p.price}}</p>
        <template #footer>
          <button @click="cart.add(p)" class="btn btn-primary">buy</button>
        </template>
      </Card>
    </li>
  </ul>
</template>

<style scoped>

</style>
