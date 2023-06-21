<script setup>
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
  <LoginPage v-if="page === 'LoginPage'" @logged-in="t=> this.aToken=t" @change-page="changePage"/>
  <Articles :token=this.aToken v-if="page === 'Articles'" @change-page="changePage" @send-slug="(s)=> this.aSlug = s"/>
  <EditPage :token=this.aToken v-if="page=== 'EditPage'"/>
  <AddPage :token=this.aToken v-if="page==='AddPage'"/>
  <ViewPage :token=this.aToken :slug=this.aSlug v-if="page==='ViewPage'"/>
</template>


