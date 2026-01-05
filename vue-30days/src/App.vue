<script setup>
import Composables from "@/views/Composables.vue";
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
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/TodoApp">TodoApp</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Bindings">Bindings</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/ConditionLoop">ConditionLoop</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Components">Components</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Emitter">Emitter</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/ComputedWatch">ComputedWatch</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Slots">Slots</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/miniProject1">miniProject1</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/VueRouterBasics">VueRouterBasics</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/NestedRoutes">NestedRoutes</router-link>
        </div>
      </div>
      <div class="row">
      <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
        <router-link to="/DynamicParams">DynamicParams</router-link>
      </div>
      <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
        <router-link to="/MiniProject2">MiniProject2</router-link>
      </div>
      <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
        <router-link to="/piniaBasics">piniaBasics</router-link>
      </div>
      <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
        <router-link to="/PiniaActions">PiniaActions</router-link>
      </div>
      <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
        <router-link to="/PiniaGetters">PiniaGetters</router-link>
      </div>
      <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
        <router-link to="/FetchAPIGet">FetchAPIGet</router-link>
      </div>
    </div>
      <div class="row">
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/FetchAPIPost">FetchAPIPost</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/PiniaAPI">PiniaAPI</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/miniProject3">miniProject3</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/CRUDProject">CRUDProject</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Lifecycle">Lifecycle</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Composables">Composables</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Provide">Provide & Inject</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">
          <router-link to="/Form">Form</router-link>
        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">

        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">

        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">

        </div>
        <div class="col-md-2 shadow p-3 bg-body-tertiary rounded text-center">

        </div>
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
