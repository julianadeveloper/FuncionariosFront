<template>
  <div id="homeview">
    <section>
      <LateralBar />
    </section>

    <nav>
      <div class="input-search">
        <InputSearch />
      </div>

      <div class="card-home">
        <CardUserAdminVue />
      </div>

    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "@/components/LateralBar.vue";
import CardUserAdminVue from "@/components/CardUserAdmin.vue"; // @ is an alias to /src
import InputSearch from "@/components/InputSearch.vue";
// import FormCreateUser from '@/components/FormCreateUser.vue'
export default defineComponent({
  name: "HomeView",
  components: {
    LateralBar,
    CardUserAdminVue,
    InputSearch,
    // FormCreateUser
  },
});
</script>

<style scope>
section {
  display: flex;
  max-width: 100%;
  text-align: center;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
.card-home {
  padding: 1rem;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#homeview {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgb(14, 14, 14);
}
.input-search {
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 720px) {
  #homeview {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
#card-home {
  justify-content: row;
}


</style>
