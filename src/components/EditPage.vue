<script>
import PageHeader from "@/components/PageHeader.vue";
import Banner from "@/components/Banner.vue";

const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
const tokenHeader = new Headers();
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
tokenHeader.append('Authorization', `Bearer ${token}`);
tokenHeader.append('content-type', 'application/json');

export default {
  components: {Banner, PageHeader},
  methods: {
    async editArticle(slug) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/edit/${slug}.json`,
            {
              method: 'POST',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<template>
  <Banner/>
  <PageHeader header="Edit"/>

  <form>
    <label for="title">Title</label>
    <textarea name="title">{{article.title}}</textarea>
    <label for="body">Body</label>
    <textarea name="body" rows="3">{{article.body}}</textarea>
    <label for="tags">Tags</label>
    <textarea name="tags">{{article.tags}}</textarea>
    <button @click="editArticle('article.slug')">Save Article</button>
  </form>
</template>