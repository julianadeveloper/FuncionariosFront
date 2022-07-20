<template>
  <div class="btn">
    <a
      href="#"
      class="btn button is-info is-outlined"
      @click="$router.push({ name: 'UpdateView', params: { id: user._id } })"
      >Alterar dados</a
    >
    <a
      href="#"
      class="btn button is-danger is-outlined"
      @click="openModal"
      >Excluir</a
    >
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
      apiService,
    };
  },
  methods: {
    openModal(){
    this.$emit("openmymodal", this.user._id)
    }
      //   this.$emit("delete", this.user);
    // abreAlert() {!this.$data.modalOpen},
    // async deleteUser() {
      
    //   await this.apiService.deleteUser([this.user._id]);
      //   this.$emit("delete", this.user);
    // },
  },
});
</script>

<style scoped></style>
