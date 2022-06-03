<template>
  <div id="homeview" class="home">
  <section>
    <LateralBar/> 
  </section>
  <!-- <MenuUser/> -->


  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import LateralBar from '@/components/LateralBar.vue'; // @ is an alias to /src
export default defineComponent({
  name: 'HomeView',
  components: {
    LateralBar,
  },
});
</script>
<style scope> 
#homeview{
  width: 100vw;
  max-height: 100vh;
  background-color: rgb(12, 11, 11);
  margin:0; 
  padding:0; 
  box-sizing:border-box; 
  overflow: hidden;
}

@media only screen and (max-width:720px ){

#homeview{
  
    display: flex;
    flex-shrink: inherit;
    align-items: flex-start;
    width: 100vw;
    max-height: 100vh;
    overflow: hidden;

  }

}
</style>
