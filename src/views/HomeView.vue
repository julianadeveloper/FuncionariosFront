<template>
  <div id="homeview">
    <section class="navbar">
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

<style scoped>
.navbar{
  margin: 0px;
  padding: 0px;
}
.card-home {
  align-items: center;
  justify-content: center;
  width: 100%;
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
#homeview::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
}

#homeview::-webkit-scrollbar-track {
  background: rgba(89, 87, 87, 0.981);        /* color of the tracking area */
}

#homeview::-webkit-scrollbar-thumb {
  background-color: rgba(22, 22, 31, 0.926);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid rgb(30, 30, 30);  /* creates padding around scroll thumb */
}
@media only screen and (max-width: 720px) {
  #homeview {
    display: flex;
    flex-wrap: wrap;
    /* overflow: scroll; */
  }
  #card-home {
    justify-content: row;
  }
}
</style>
