<template>
  <main
    :class="{
      'dark-mode': DarkthemeOn,
    }"
  >
    <router-view />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      DarkthemeOn: "ThemeModule/getDarkThemeOn",
    }),
  },
  // setup() {
  //   const store = useStore(key);
  //   console.log(store)
  //     // return { DarkThemeOn: store.state.DarkThemeOn };
  //   },
  methods: {
    changeClassTheme() {
      this.DarkthemeOn = !this.DarkthemeOn;
    },
  },
});
</script>

<style>
main {
  max-width: 100vw;
  height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  overflow: hidden;
}
main.dark-mode {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
}
:root {
  --bg-primary: #ebebee;
  --bg-secondary: rgb(32, 31, 31);
  --text-secondary: rgb(251, 251, 251);
  --text-primary: rgb(28, 27, 27);
  --bg-login-dark: rgb(21, 15, 15);
  --bg-login-primary: rgb(241, 241, 241);
  --bg-home-login: rgb(52, 49, 49);
}
</style>
