<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Articles from './components/Articles.vue'
import EditPage from "@/components/EditPage.vue";
import AddPage from "@/components/AddPage.vue";
import ViewPage from "@/components/ViewPage.vue";
import Banner from "@/components/Banner.vue";
import LoginPage from "@/components/LoginPage.vue";

</script>

<script>

export default {
  data() {
    return {
      page: 'LoginPage'
    };
  },
  methods: {
    changePage(change){
      this.page=change;
    }
  }
}
</script>

<template>
  <Banner :page=this.page @change-page="changePage"/>
  <LoginPage v-if="page=== 'LoginPage'"/>
  <Articles v-if="page === 'Articles'" @change-page="changePage"/>
  <EditPage v-if="page=== 'EditPage'"/>
  <AddPage v-if="page==='AddPage'" />
  <ViewPage v-if="page==='ViewPage'"/>

</template>


<!--
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->


