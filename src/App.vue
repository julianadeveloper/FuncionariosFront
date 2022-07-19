<template id="homeview">
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import store from "./store";
import { key } from "./store/Theme";


export default defineComponent({

...mapState({
  setDarkthemeOn: "ThemeModule/setDarkThemeOn"
}),

// created() {
//   console.log('store 123', store)
// },

// setup() {
//   const store = useStore(key);
//   console.log(store)
//     // return { DarkThemeOn: store.state.DarkThemeOn };
//   },
//   methods:{
    
//     MudaTema(){
//             this.$store.commit({type: this.MudaTema})
//           }
//   }
})
</script>


<style>
#homeview {
  display: flex;
  max-width: 100vw;
  height: 100vh;
   background: var(--bg-login-primary);
}
#app {
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
}

#app.dark-mode{
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
}
:root {
  --bg-primary: rgb(219, 186, 186);
  --bg-secondary: rgb(32, 31, 31);
  --text-secondary: rgb(251, 251, 251);
  --text-primary: rgb(28, 27, 27);
  --bg-login-dark: rgb(21, 15, 15);
  --bg-login-primary: rgb(241, 241, 241);
  --bg-home-login: rgb(52, 49, 49);
}
</style>
