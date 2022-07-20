<template>
  <nav class="nav-modal">
    <div> 
      <div >
        <a class="btn button is-info is-outlined" @click="deleteUser"
          >Confirmar</a
        >
      </div>
      <div>
        <a class="btn button is-info is-outlined" @click="closeModal"
          >Cancelar</a
        >
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import User from "../interface/User";
import { ApiService } from "@/services/api";

export default defineComponent({
  name: "MyModal",
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
    closeModal() {
      this.$emit("closemymodal", this.user._id);
      //  this.$router.push({name: 'home'})
    },

    async deleteUser() {
      await this.apiService.deleteUser([this.user._id]);

      this.$emit("delete", this.user);
    },
  },
});
</script>
<style scoped>
.nav-modal{
  width: 200px;
  height: 200px;
  background-color: rgb(238, 209, 204);
}
</style>
