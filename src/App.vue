<template>
  <div>
    <Navbar />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
<script>
import { Navbar } from './components';
import { RouterView } from 'vue-router';
export default {
  components:{
    Navbar,
    RouterView,
  },
  mounted() {
    this.$store.dispatch("getuserj")
  }
}
</script>
<style lang="">
                                                                                       
</style>jhhhmn                   z   