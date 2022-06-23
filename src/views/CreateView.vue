<template>
  <div id="homeview">
    <section>
      <LateralBar />
    </section>

    <nav>
    <div>
        <FormCreateUser/>
    </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "@/components/LateralBar.vue";
 import FormCreateUser from '@/components/FormCreateUser.vue'
export default defineComponent({
  name: "CreateView",
  components: {
    LateralBar,
     FormCreateUser
  },
});
</script>

<style scoped>

</style>
