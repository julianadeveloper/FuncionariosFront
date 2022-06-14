<template>
  <div class="input-busca">
    <input
    
    type="text"
      class="form-control"
      placeholder="Buscar Usuario"
      required
    />
    <!-- <button class="btn btn-success">Buscar</button> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "@/services/api";
export default defineComponent({
  name: "InputSearch",
});
</script>
<style scoped>

input {
  display: flex;
  width: 75%;

}
</style>
