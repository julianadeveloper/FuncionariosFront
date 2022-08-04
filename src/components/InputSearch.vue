<template>
  <div class="input-search">
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Usuario"
      required
      v-model="user.name"
    />

    <button class="btn button is-info is-outlined" @click="listerUsername">
      Buscar
    </button>
    <button class="btn button is-info is-outlined" @click="clearInput">
      Limpar
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "@/services/api";
import User from "@/interface/User";
export default defineComponent({
  name: "InputSearch",

  setup() {
    const apiService = new ApiService();
    const user = ref({
      name: "",
    });
    return { user, apiService };
  },
  methods: {
    async listerUsername() {
      this.$emit("value", this.user.name);
    },

   async  clearInput() {
        this.user.name = ''
      this.$emit("value")

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
