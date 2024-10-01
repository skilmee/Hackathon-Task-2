<template>
  <div class="portal-management">
    
    <div class="actions">
      <button @click="importProject">Импортировать проект</button>
      <button>Права доступа</button>
      <button>Посещаемость портала</button>
      <button @click="exportLogs">Экспортировать логи</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortalManagement',
  methods: {
    importProject() {
      console.log('Импортировать проект');
      // Добавьте логику для импорта проекта из Excel
    },
    exportLogs() {
      console.log('Экспортировать логи');
      // Добавьте логику для экспорта логов
    }
  }
};
</script>

<style scoped>
.portal-management {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.actions button {
  margin: 10px;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.actions button:hover {
  background-color: #2980b9;
}

.actions button:focus {
  outline: none;
}
</style>