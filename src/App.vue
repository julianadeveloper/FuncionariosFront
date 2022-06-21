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
  --bg-primary: rgb(219, 186, 186);
  --bg-secondary: rgb(32, 31, 31);
  --text-secondary: rgb(251, 251, 251);
  --text-primary: rgb(28, 27, 27);
  --bg-login-dark: rgb(21, 15, 15);
  --bg-login-primary: rgb(241, 241, 241);
  --bg-home-login: rgb(52, 49, 49);
}
</style>
