<script setup>
</script>

<template>
  <header>
    <div class="container">
      <h1 class="text-center">تمرین ها</h1>
      <div class="row">
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Hello">Hello</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Counter">Counter</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center"></div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center"></div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center"></div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center"></div>
      </div>
    </div>
  </header>
  <section class="mt-5">
    <div class="container">
      <router-view />
    </div>
  </section>
</template>

<style scoped>
</style>
