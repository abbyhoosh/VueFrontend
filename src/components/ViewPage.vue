<script>
import PageHeader from "@/components/PageHeader.vue";

const apiBaseURL = 'https://restfulapi--abbyhoosh.repl.co/proxy/5000';
const tokenHeader = new Headers();
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwLCJleHAiOjE2ODczNzMxMDB9.-mimtn4oM94oFgZiLUfQ_UGK6Ow01N3emR4ojKhjwZg';
tokenHeader.append('Authorization', `Bearer ${token}`);
tokenHeader.append('content-type', 'application/json');

export default {
  components: {PageHeader},
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    async viewArticle(slug) {
      try {
        const response = await fetch(`${apiBaseURL}/articles/view/${slug}.json`,
            {
              method: 'GET',
              credentials: 'include',
              headers: tokenHeader,
              mode: 'cors'
            });
      } catch (e) {
        console.log(e);
      }
    },
  }

}
</script>

<template>
  <PageHeader header="title"/>
  <p>{{slug}}</p>
  <p>body</p>
  <p>tag tag tag tag tag tag</p>
  <p>created</p>
</template>