<template>
  <div class="app">
    <h2>{{ message }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const message = ref('hello vue')
</script>

<style>
.app {
  color: red;
}
</style>
