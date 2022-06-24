<template>
  <div id="homeview">
    <section>
      <LateralBar />
    </section>

    <nav>
    <div>
        <UpdateUser/>
    </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LateralBar from "@/components/LateralBar.vue";
import UpdateUser from "@/components/UpdateUser.vue";
export default defineComponent({
  name: "UpdateView",
  components: {
    LateralBar,
     UpdateUser,
  },
});
</script>

<style scoped>

</style>
