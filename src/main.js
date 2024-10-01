import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectsRegistry from './components/ProjectsRegistry.vue';
import LibraryPage from './components/LibraryPage.vue';
import MonitoringPage from './components/MonitoringPage.vue';
import PortalManagement from './components/PortalManagement.vue';

// Определение маршрутов
const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsRegistry },
  { path: '/library', component: LibraryPage },
  { path: '/monitoring', component: MonitoringPage },
  { path: '/management', component: PortalManagement }
];

// Создание экземпляра роутера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Создание приложения Vue
const app = createApp(App);
app.use(router);
app.mount('#app');
