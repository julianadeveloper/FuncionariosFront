<template>
  <div class="modal-background">
    <div class="modal-content">
      <div>
        <a class="btn button is-info is-outlined" @click="deleteUser"
          >Confirmar</a
        >
        <a class="btn button is-info is-outlined" @click="closeModal">X</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import User from "../interface/User";
import { ApiService } from "@/services/api";
import { POSITION, useToast } from "vue-toastification";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MyModal",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  data() {
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
    chamaToast() {
      const toast = useToast();

      // or with options
      toast.warning("Usuário excluído com sucesso.", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },

    async deleteUser() {
      if (localStorage.getItem("sessionLogin") === this.user._id) {
        alert("Você não pode excluir seu próprio perfil");
      }
      this.$emit("delete", this.user._id);
      this.chamaToast();
      this.$router.push({ name: "home" });
      this.closeModal();
      await this.apiService.deleteUser([this.user._id]);
    },
  },
});
</script>
<style scoped>
.modal-background {
  position: absolute;
  display: block;
}
.btn {
  margin: 1rem;
}
</style>
