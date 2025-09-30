<template>
  <div class="pdf-container">
    <h2>Пример PDF-документа</h2>
    <iframe
      src="/1mb.pdf"
      width="100%"
      height="600px"
      style="border: 1px solid #ddd;"
      title="Пример PDF"
    >
      Ваш браузер не поддерживает отображение PDF.
      Вы можете <a :href="pdfUrl">скачать файл</a>.
    </iframe>
  </div>
</template>

<script setup>
const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
</script>

<style scoped>
.pdf-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}
</style>