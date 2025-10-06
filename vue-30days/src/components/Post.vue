<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()
const posts = [
  { id: 1, title: "First Post", content: "Hello Vue Router!" },
  { id: 2, title: "Second Post", content: "Learning Vue is fun." }
]
const  post=computed(()=>
posts.find(p => p.id===Number(route.params.id))
)

</script>

<template>
<div>
  <h2>{{post?.title}}</h2>
  <p>{{ post?.content }}</p>
</div>
</template>

<style scoped>

</style>
