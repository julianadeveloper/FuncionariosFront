<template>
 <header class="header">
   <!-- <h1>Bem vindo, User.</h1> -->

     <button class="home-icon">
     <i class="fa-solid fa-house-user fa-lg"></i>
   </button>

<button  class="user-icon">
<i class="fa-solid fa-user-group fa-lg"></i>
</button>

<button class="logout-icon">
  <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
</button>


<MenuUser/>
 </header>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent} from 'vue';

export default defineComponent({
  name: 'LateralBar',
  components:{
    'MenuUser':defineAsyncComponent(()=> import('./Menu.vue')),

}})
</script>

<style scoped>

.header{
display: flex;
flex-direction: column;
align-items: flex-start;
width: 10%;
height: 100vh;
background: rgba(17, 16, 16, 0.747);

}
span .logout-icon{
  width: 10px;
  height: 10px;
}
h1{
padding: 1rem;
color: rgb(85, 118, 226);
font-size: 1rem;
text-align: center;
}
h1:hover{
  font-size: 2rem;
}
button{
  cursor:pointer;
  border: 1px solid transparent;
  background-color: transparent;
}
::before {
    color: rgb(73, 73, 73);
}

.home-icon, .user-icon, .logout-icon{
display: flex;
align-items: center;
justify-content: center;  
margin:auto;
 
 }
@media screen and (max-width:840px ) {

  .header{
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    margin-top:960px;
    align-items:center;
    width:100vw;
    height: 12rem;
    background: rgba(17, 16, 16, 0.747);
    
  }
}

</style>
