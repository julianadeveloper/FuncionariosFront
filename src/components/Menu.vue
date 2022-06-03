<template>
  <div class="menu-functions">

    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a>{{ item.name }}</a>
      </li>
    </ul>
    
  </div>
    <button type="submit">Logout</button> 

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuUser",
  setup() {
    const items = [
      { name: "Consultar Usuários" },
      { name: "Cadastrar Usuários" },
      { name: "Consultar Usuários Por Matricula" },
      { name: "Alterar permissões de usuário" },
      { name: "Alterar dados de usuário" },
      { name: "Deletar Usuários" },
    ];

    return { items };
  },
});
</script>

<style scoped>

li{
    margin: 1rem;
}
button{
  display: none;
}
.menu-functions li{
    width: 100%;
    height: 100%;
    display:none;
    list-style: none;
}

</style>