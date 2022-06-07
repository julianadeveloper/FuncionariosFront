<template>
  <div class="login">
<LoginUser/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginUser from '@/components/LoginUser.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    LoginUser
  }
});
</script>

