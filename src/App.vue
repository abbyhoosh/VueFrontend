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
      page: 'LoginPage',
      aSlug: '',
      aToken: ''
    };
  },
  methods: {
    changePage(change) {
      this.page = change;
    }
  }
}
</script>

<template>
  <Banner :page=this.page @change-page="changePage"/>
  <LoginPage v-if="page=== 'LoginPage'" @logged-in="t=> this.aToken=t" @change-page="(p)=> this.page=p"/>
  <Articles v-if="page === 'Articles'" @change-page="changePage" @send-slug="(s)=> this.aSlug = s"/>
  <EditPage v-if="page=== 'EditPage'"/>
  <AddPage v-if="page==='AddPage'"/>
  <ViewPage :slug=this.aSlug v-if="page==='ViewPage'"/>

</template>


