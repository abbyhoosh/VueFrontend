
<script>
import Banner from "@/components/Banner.vue";
import PageHeader from "@/components/PageHeader.vue";
import {ref} from 'vue'

const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
const tokenHeader = new Headers();
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
tokenHeader.append('Authorization', `Bearer ${token}`);
tokenHeader.append('content-type', 'application/json');

export default {
  data() {
    return {
      title: ref(''),
      body: ref(''),
      tags: ref('')
    };
  },
  components: {PageHeader, Banner},
  methods: {
    async addArticle(aTitle, aBody, aTags) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/add.json`,
            {
              method: 'POST',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors',
              body: JSON.stringify({title: aTitle, body: aBody, Tags: aTags }),
            });
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<template>
  <PageHeader header="Add Article"/>

  <form>
    <div>
      <label for="title">Title</label> <br>
      <textarea v-model="title" id="title" cols="100"></textarea>
    </div>
    <div>
      <label for="body">Body</label><br>
      <textarea v-model="body" id="body" rows="5" cols="100"></textarea>
    </div>
    <div>
      <label for="tags">Tags</label><br>
      <textarea v-model="tags" id="tags" cols="100"></textarea>
    </div>
  </form>
  <div class="center">
    <button @click="addArticle(this.title, this.body, this.tags)">Save Article</button>
  </div>
</template>

<style>
form{
  height: 40vh;
}
.center{
  text-align: center;
}
</style>