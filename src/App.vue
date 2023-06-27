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
  <LoginPage v-if="page === 'LoginPage'" @change-page="changePage"/>
  <Articles :token=tokenStore.token v-if="page === 'Articles'" @change-page="changePage" @focus="(a)=> this.aFocus = a"/>
  <ViewPage :token=tokenStore.token :article="this.aFocus"  v-if="page==='ViewPage'"/>
  <EditPage :token=tokenStore.token :article="this.aFocus" v-if="page=== 'EditPage'" @change-page="changePage"/>
  <AddPage :token=tokenStore.token v-if="page==='AddPage'" @change-page="changePage"/>
</template>


