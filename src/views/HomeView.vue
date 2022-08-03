<template>
  <div id="homeview">
    <section>
      <LateralBar @theme="darktheme" />
    </section>

    <section id="navigation">
      <div class="input-search">
        <InputSearch @value="search"  />
      </div>

      <div class="card-home">
        <CardUserAdminVue :search="searchUsername" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "@/components/LateralBar.vue";
import CardUserAdminVue from "@/components/CardUserAdmin.vue"; // @ is an alias to /src
import InputSearch from "@/components/InputSearch.vue";
import { SocketModule } from "@/services/socket";
import { ApiService } from "@/services/api";

export default defineComponent({
  name: "HomeView",
  components: {
    LateralBar,
    CardUserAdminVue,
    InputSearch,
  },
  data() {
    return {
      apiService: new ApiService(),
      DarkThemeOn: false,
      socketService: SocketModule.connect(),
      searchUsername: "",
    };
  },

  methods: {
    search(event: string) {
      this.searchUsername = event;
    },
    darktheme(DarkThemeOn: boolean) {
      this.DarkThemeOn = DarkThemeOn;
    },
  },
  async mounted() {
    await this.apiService.listUsers();
  },
  
});
</script>

<style>
.card-home {
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: black;
}
#homeview {
  overflow-x: hidden;
  overflow-y: scroll;

  width: 100%;
  height: 100%;
}
.input-search {
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 720px) {
  #homeview {
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
  }
  #card-home {
    justify-content: row;
  }
}
</style>
