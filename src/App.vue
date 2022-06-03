<template>
  <nav>
    <router-link to="/LoginView"></router-link> 
    <router-link to="/about"></router-link>
  </nav>
  <main>
  <div>
  </div>

  <div>
  </div>
  </main>
  <router-view/>
</template>

<style>
#app{
  width: 100vw;
  max-height: 100vh;
  background-color: rgb(12, 11, 11);
  margin:0; 
  padding:0; 
  box-sizing:border-box; 
  overflow: hidden;
}

@media only screen and (max-width:720px ){

#app{
    display: flex;
    flex-shrink: inherit;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

  }
}
</style>
