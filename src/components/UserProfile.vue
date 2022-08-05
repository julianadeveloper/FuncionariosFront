<template>
  <div class="container">
       <button @click="openDropDown">
          <i class="fas fa-angle-down" aria-hidden="true"> </i>
        </button>
    <div class="role">
      <div class="name">
        <span>{{getName}}</span>
      </div>
      <span>{{getRole}}</span>
    </div>
    <div class="user">
      <span> <i class="icon-user fa-solid fa-user fa-xl"></i> </span>
    </div>
  </div>
</template>
<script lang="ts">
import { ApiService } from "@/services/api";
import { defineComponent, ref } from "vue";
import { mapGetters, mapState, storeKey, useStore } from "vuex";
export default defineComponent({
  name: "UserProfile",
  computed: {
 
 ...mapGetters({ getName: "authModule/getName", getRole: "authModule/getRole" }),
  },
  data() {
    
    const apiService = new ApiService();
    const user = ref({
      name: '',
      role: "",
      id: "",
    });
    return { user, apiService};
  },
  methods:{
    openDropDown(){
      this.$emit('open')
    }
  }

});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");
button {
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
}
.name {
  font-size: 1.1rem;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(52, 49, 49);
  font-weight: 600;
}
.role {
  font-size: 14px;
  padding: 1rem;
}
.user {
  padding: 0.25rem;
  color: rgb(236, 236, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #855bfd;
}
</style>
