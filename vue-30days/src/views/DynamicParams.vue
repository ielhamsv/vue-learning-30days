<script setup>
const users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Reza' }
]
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>users</h1>
          <ol>
            <li v-for="(user,id) in users " :key="user.id">
              <router-link :to="`/users/${user.id}`">{{user.name}}</router-link>
            </li>
          </ol>
        </div>
        <div class="col-md-6">
          <h2>User ID: {{ $route.params.id }}</h2>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
