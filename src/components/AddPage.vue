<script>
import Banner from "@/components/Banner.vue";
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {PageHeader, Banner},
  methods: {
    async addArticle(){
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
  <PageHeader header="Add Article" />
  <Banner />

  <form>
    <label for="title">Title</label>
    <textarea name="title"></textarea>
    <label for="body">Body</label>
    <textarea name="body" rows="3"></textarea>
    <label for="tags">Tags</label>
    <textarea name="tags"></textarea>
    <button @click="addArticle">Save Article</button>
  </form>
</template>