<template>
  <nav></nav>
  <main class="modo-escuro"></main>
  <router-view />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background: var(--bg-secondary);
}

/* main.modo-escuro{
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
} */
:root {
  --bg-primary: rgb(106, 95, 95);
  --bg-secondary: rgb(32, 31, 31);
  --text-secondary: rgb(251, 251, 251);

  --bg-login: rgb(21, 15, 15);
  --bg-home-login: rgb(52, 49, 49);
}
</style>
