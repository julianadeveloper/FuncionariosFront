<template>
  <nav>

  </nav>
  <main class="modo-escuro">

  </main>
  <router-view />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-primary);
}

main{
  --bg-primary: #fff;
  --text-primary: #000;
}
main.modo-escuro{
 --bg-secondary: rgb(32, 31, 31);
  --text-secondary: rgb(251, 251, 251);
}


</style>
