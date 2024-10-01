<template>
  <div>
    <table>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.code }}</td>
          <td>{{ project.name }}</td>
          <td>{{ project.stage }}</td>
          <td>{{ project.status }}</td>
          <td>{{ project.budget }}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px;">
      <button @click="setActiveButton('export')" :class="{'active': activeButton === 'export'}">Экспорт</button>
      <button @click="setActiveButton('group')" :class="{'active': activeButton === 'group'}">Группировать</button>
      <input type="text" placeholder="Поиск" style="margin-right: 220px;" />

      <button @click="setActiveButton('info')" :class="{'active': activeButton === 'info'}">Общая информация</button>
      <button @click="setActiveButton('status')" :class="{'active': activeButton === 'status'}">Состояние</button>
      <button @click="setActiveButton('team')" :class="{'active': activeButton === 'team'}">Команда проекта</button>
      <button @click="setActiveButton('timeline')" :class="{'active': activeButton === 'timeline'}">Сроки</button>
      <button @click="setActiveButton('cost')" :class="{'active': activeButton === 'cost'}">Стоимость</button>
      <button @click="setActiveButton('documentation')" :class="{'active': activeButton === 'documentation'}">Документация</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      activeButton: null
    };
  },

  created() {
    this.fetchProjects();
  },

  methods: {
    fetchProjects() {
      fetch('http://localhost/api/projects.php')
        .then(response => response.json())
        .then(data => {
          this.projects = data;
        });
    },
    setActiveButton(button) {
      this.activeButton = button;
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background-color: #f4f4f4;
}
th, td {
  padding: 10px;
}
th {
  text-align: left;
}
td {
  border-bottom: 1px solid #ccc;
}
div > button, input[type="text"] {
  margin-right: 10px;
}
button.active {
  background-color: #d3d3d3; /* Более светло-серый цвет для выделения */
  color: black;
}
button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #e0e0e0; /* Цвет при наведении */
}
</style>