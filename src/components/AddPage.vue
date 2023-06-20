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
  <PageHeader header="Add Article"/>

  <form>
    <div>
      <label for="title">Title</label> <br>
      <textarea name="title" cols="100"></textarea>
    </div>
    <div>
      <label for="body">Body</label><br>
      <textarea name="body" rows="5" cols="100"></textarea>
    </div>
    <div>
      <label for="tags">Tags</label><br>
      <textarea name="tags" cols="100"></textarea>
    </div>
    <button>Save Article</button>
  </form>
</template>