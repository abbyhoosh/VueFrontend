<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {Banner},
}
</script>

<template>

  <Banner/>
  <router-view></router-view>

  <!--
  <Articles v-if="page === 'Articles'" @change-page="changePage" @focus="(a)=> this.aFocus = a"/>
  <ViewPage v-if="page==='ViewPage'" :article="this.aFocus"/>
  <EditPage v-if="page=== 'EditPage'" :article="this.aFocus" @change-page="changePage"/>
  <AddPage v-if="page==='AddPage'" @change-page="changePage"/>
  -->
</template>


