<script>
import PageHeader from "@/components/PageHeader.vue";

const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';

export default {
  components: {PageHeader},
  props: {
    slug: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      article: ''
    }
  },
  methods: {
    async viewArticle(slug) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/view/${slug}.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers:{
                'Authorization': `Bearer ${this.token}`,
                'content-type': 'application/json'
              },
              mode: 'cors'
            });
        this.article= await response.json()
        console.log(this.article);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted(){
    this.viewArticle(this.slug);
  }

}
</script>

<template>
  <div v-for="a in article">
    <PageHeader :header="a.title" />
    <br>
    <p class="body">{{a.body}}</p>
    Tags:
    <a v-for="t in a.tags">{{t.title}}</a>
    <p>Created: {{a.created}}</p>
  </div>
</template>

<style>
.body{
  font-size: 20px;
}
</style>