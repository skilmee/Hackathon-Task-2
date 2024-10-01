<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>ПОРТАЛ ПРОЕКТНОГО УПРАВЛЕНИЯ</h1>
        <p>Пользователь: Федорова Диана Кирилловна</p>
      </div>
    </header>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/projects">Реестр проектов</router-link>
      <router-link to="/library">Библиотека</router-link>
      <router-link to="/monitoring">Мониторинг</router-link>
      <router-link to="/management" class="active">Управление порталом</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  background-color: #b0c4de; /* светло-голубой */
  padding: 20px;
  text-align: left;
}

.header-content h1 {
  margin: 0;
  font-size: 24px;
}

.header-content p {
  margin: 5px 0 0;
}

nav {
  background-color: #f0f8ff; /* очень светлый голубой */
  padding: 10px;
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50; /* темно-синий */
  margin-right: 10px;
  padding: 10px;
  text-decoration: none;
  background-color: #007acc; /* насыщенный синий */
  border-radius: 4px;
}

nav a.router-link-exact-active {
  background-color: #005f99; /* темно-синий для активной ссылки */
}

nav a:hover {
  background-color: #e0f7fa; /* светло-голубой при наведении */
}
</style>