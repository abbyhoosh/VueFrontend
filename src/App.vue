<script setup>
import Articles from './views/Articles.vue'
import EditPage from "@/views/EditPage.vue";
import AddPage from "@/views/AddPage.vue";
import ViewPage from "@/views/ViewPage.vue";
import Banner from "@/components/Banner.vue";
import LoginPage from "@/views/LoginPage.vue";
</script>

<script>
export default {
  data() {
    return {
      page: 'LoginPage',
      aFocus: 'temp',
      aToken: ''
    };
  },
  methods: {
    changePage(change) {
      try{this.page = change;
      }catch (e) {
        console.log(e);
      }
    }

  }
}
</script>

<template>
  <Banner :page=this.page @change-page="changePage"/>
  <LoginPage v-if="page === 'LoginPage'" @logged-in="t=> this.aToken=t" @change-page="changePage"/>
  <Articles :token=this.aToken v-if="page === 'Articles'" @change-page="changePage" @focus="(a)=> this.aFocus = a"/>
  <ViewPage :token=this.aToken :article="this.aFocus"  v-if="page==='ViewPage'"/>
  <EditPage :token=this.aToken :article="this.aFocus" v-if="page=== 'EditPage'" @change-page="changePage"/>
  <AddPage :token=this.aToken v-if="page==='AddPage'" @change-page="changePage"/>
</template>


