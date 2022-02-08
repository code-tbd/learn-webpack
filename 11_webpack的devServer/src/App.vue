<template>
  <div class="vue">{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('hello vue')
</script>
