<template>
  <div class="button-adm" >
    <a
      href="#"
      class="btn btn-primary btn-sm"
      @click="$router.push({ name: 'UpdateView', params: { id: user._id } })"
      >Alterar dados</a
    >
    <a href="#" class="btn btn-danger btn-sm" @click="deleteUser">Excluir</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import User from "../interface/User";
import { ApiService } from "@/services/api";

export default defineComponent({
  name: "btn-admin",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup() {
    const apiService = new ApiService();
    return {
      apiService
    };
  },
  methods: {
   
    async deleteUser() {
      alert("Deletando usuario");

      await this.apiService.deleteUser([this.user._id]);

      this.$emit("delete", this.user);
    },
  },
});
</script>

<style scoped>
.btn {
  margin: 0 1rem;
}
</style>
