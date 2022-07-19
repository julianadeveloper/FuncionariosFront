<template>
  <section id="body-section-dashboard">
    <div class="body-menu">
      <i class="fas fa-id-card"></i>
      <a class="btn-dashboard" @click="$router.push({ name: 'home' })">
        Listar usuarios</a
      >
    </div>
    <div class="body-menu" v-if="isAdmin">
      <a class="btn-dashboard" @click="$router.push({ name: 'CreateView' })"
        >Cadastrar usuarios</a
      >
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { useToast } from "vue-toastification";

export default defineComponent({
  name: "DashboardComponent",
setup(){
   const toast = useToast();

      // Use it!
      toast("I'm a toast!");

      // or with options
      toast.success("My toast content", {
        timeout: 2000
      })
            return { toast }

},
  computed: {
    ...mapGetters({ isAdmin: "authModule/isAdmin" }),
  },
 methods: {
      myMethod() {

        // Since you returned `toast` from setup(), you can access it now
        this.toast.info("I'm an info toast!");
          }    }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");

#body-section-dashboard {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.body-menu {
  font-family: "Roboto", sans-serif;
  width: 300px;
  height: 200px;
  border-radius: 10%;
  background: rgb(227, 222, 222);
  padding: 1rem;
  margin: 0.25rem;
}
.btn-dashboard {
  background-color: transparent;
  color: black;
}
</style>
