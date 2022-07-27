<template>
  <div id="homeview">
    <div>
      <!-- <MyUsers/> -->
    </div>
    <section>
      <LateralBar @theme="darktheme" />
    </section>

    <nav>
      <DashboardComponentVue />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "@/components/LateralBar.vue";
import { SocketModule } from "@/services/socket";
import DashboardComponentVue from "@/components/Dash.vue";
import { POSITION, useToast } from "vue-toastification";

export default defineComponent({
  name: "DashboardView",
  components: {
    LateralBar,
    DashboardComponentVue,
  },
  setup() {
    return {
      DarkThemeOn: false,
      socketService: SocketModule.connect(),
    };
  },
  data() {
    return {
      searchUsername: "",
    };
  },

  methods: {
    search(event: any) {
      this.searchUsername = event;
    },
    darktheme(DarkThemeOn: boolean) {
      this.DarkThemeOn = DarkThemeOn;
    },
    chamaToast() {
      const toast = useToast();

      // or with options
      toast.warning("Você foi deslogado devido a  um acesso simultâneo", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
     async logout() {
      localStorage.removeItem("token")
      localStorage.removeItem("sessionLogin")
      localStorage.removeItem("role");
      this.$router.push({ name: "login" });
      this.chamaToast()
    },
  },
  async mounted() {
    await this.socketService.registerListener(
      "is-logged",
      "is-logged",
      (data) => {
        let sessionUser = localStorage.getItem("sessionLogin");
        if (String(sessionUser) == String(data._id._id)) {

          setTimeout(() => {
           this.logout()
          }, 3000);
          clearTimeout(3001);
        }
      }
    );
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

#homeview {
  display: flex;
  width: 100vw;
  height: 100vh;
  /* background: var(--bg-login-primary); */
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
