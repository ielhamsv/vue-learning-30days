<script setup>
import {usePostStore} from "@/stores/posts.js";
const posts=usePostStore()
</script>

<template>
<h1>Posts</h1>
  <button @click="posts.fetchPosts()">Load</button>
  <hr>
  <ul>
    <li v-for="post in posts.posts" :key="post.id">{{post.title}}</li>
  </ul>
</template>

<style scoped>

</style>
