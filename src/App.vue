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
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      DarkthemeOn: "ThemeModule/getDarkThemeOn",
    }),
  },
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
  color: var(--text-secondary);
  overflow: hidden;
}
main.dark-mode {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  font-weight: 800;
  text-size-adjust: inherit;
}

:root {
  --bg-primary: #bbbbccd5;
  --bg-secondary:  rgb(42 44 64);
  --text-secondary: rgb(251, 251, 251);
  --text-primary: rgb(27, 27, 27);
  --bg-login-dark: rgb(21, 15, 15);
  --bg-login-primary: rgb(241, 241, 241);
  --bg-home-login: rgb(52, 49, 49);
}
</style>
