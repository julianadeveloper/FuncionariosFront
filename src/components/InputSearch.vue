<template>
  <div class="input-search">
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Usuario"
      required
      v-model="user.username"
    />

    <button class="btn btn-success" @click="listerUsername">Buscar</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "@/services/api";
export default defineComponent({
  name: "InputSearch",

  setup() {
    const apiService = new ApiService();
    const user = ref({
      username: "",
    });
    return { user, apiService };
  },
  methods: {
    async listerUsername() {
      this.$emit("value", this.user.username);
    },
  },
});
</script>
<style scoped>
.input-search {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
input {
  
  justify-content: center;
  width: 20rem;
  align-items: center;
}

@media only screen and (max-width: 720px) {
  input {
    width: 17rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
