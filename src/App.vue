<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
</script>

<style scoped>
.pdf-container {
  max-width: 100%;
  margin: 0 auto;
}

h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}
</style>