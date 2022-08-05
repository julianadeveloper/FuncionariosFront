<template>
  <div class="login">
    <LoginUser/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginUser from '@/components/LoginUser.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'LoginView',
  components: {
    LoginUser
  },

  // mounted(){
  //   console.log(useStore())
  // }
});
</script>
<style scoped>
.login{
  background: var(--bg-home-login);
}

</style>

