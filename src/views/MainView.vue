<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="pdf-container">
    <RouterLink to="/2">2</RouterLink>
    <p>--------</p>
    <RouterLink to="/3">3</RouterLink>

    <iframe
      src="/1mb.pdf"
      width="100%"
      height="600px"
      style="height: 100vh;"
      title="Пример PDF"
    >
    </iframe>
  </div>
</template>

