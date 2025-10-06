<script setup>
const posts=[{title:"First Post",id:1, content: "Hello Vue Router!" },
  {title:"Second Post",id:2, content: "Learning Vue is fun."}]
</script>

<template>
  <h1>blog</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="`MiniProject2/post/${post.id}`">{{post.title}}</router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
