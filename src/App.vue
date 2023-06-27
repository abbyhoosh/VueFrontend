<script setup>
import Articles from './views/Articles.vue'
import EditPage from "@/views/EditPage.vue";
import AddPage from "@/views/AddPage.vue";
import ViewPage from "@/views/ViewPage.vue";
import Banner from "@/components/Banner.vue";
import LoginPage from "@/views/LoginPage.vue";

</script>

<script>
import {useTokenStore} from "@/stores/TokenStore";

export default {
  data() {
    return {
      tokenStore: useTokenStore(),
      page: 'LoginPage',
      aFocus: 'temp',
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
  {{this.tokenStore.token}}<br>
  {{this.tokenStore.isLoggedIn}}
  <router-view> </router-view>

  <!--
  <LoginPage v-if="page === 'LoginPage'" @change-page="changePage"/>
  <Articles v-if="page === 'Articles'" @change-page="changePage" @focus="(a)=> this.aFocus = a"/>
  <ViewPage v-if="page==='ViewPage'" :article="this.aFocus"/>
  <EditPage v-if="page=== 'EditPage'" :article="this.aFocus" @change-page="changePage"/>
  <AddPage v-if="page==='AddPage'" @change-page="changePage"/>
  -->
</template>


