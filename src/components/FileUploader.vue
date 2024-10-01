<template>
  <div>
    <input type="file" @change="uploadFile" />
  </div>
</template>

<script>
export default {
  methods: {
    uploadFile(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost/api/upload.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      });
    }
  }
}
</script>

<style scoped>
/* Добавьте стили для вашего компонента здесь */
</style>