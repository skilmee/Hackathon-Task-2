<template>
  <div>
    <h1>Project List</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }} - {{ project.status }} - {{ project.budget }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    };
  },
  created() {
    fetch('http://localhost/api/projects.php')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
      });
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
