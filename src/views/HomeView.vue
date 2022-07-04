<template>
  <div id="homeview">
    <div>
      <!-- <MyUsers/> -->
    </div>
    <section>
      <LateralBar @theme="darktheme" :class="{ 'dark-mode': DarkThemeOn }" />
    </section>

    <nav>
      <div class="input-search">
        <InputSearch @value="search" />
      </div>

      <div class="card-home">
        <CardUserAdminVue :search="searchUsername" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "@/components/LateralBar.vue";
import CardUserAdminVue from "@/components/CardUserAdmin.vue"; // @ is an alias to /src
import InputSearch from "@/components/InputSearch.vue";
import { SocketModule } from "@/services/socket";
// import MyUsers from "../components/MyUsers.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LateralBar,
    CardUserAdminVue,
    InputSearch,
    // MyUsers
},
  data() {
    return {
      searchUsername: "",
      DarkThemeOn: false,
      // socketService: SocketModule.connect(),
    };
  },
  methods: {
    search(event: any) {
      this.searchUsername = event;
    },
    darktheme(DarkThemeOn: boolean) {
      this.DarkThemeOn = DarkThemeOn;
    },

  async logoutUserSession() {
        this.socketService.registerListener(
      "is-logged",
      "is-logged",
      (data: string) => {
        this.logoutUserSession()
    }
    );
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    }
 
  },
  
});
</script>

<style scope>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow-y: scroll;
}
.card-home {
  padding: 1rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#homeview {
  display: flex;
  width: 100vw;
  height: 100vh;
  background:var(--bg-login-primary);
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
    position: absolute;
  }
  #card-home {
    justify-content: row;
  }
}
</style>
