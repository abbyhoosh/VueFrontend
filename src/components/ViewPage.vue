<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {PageHeader},

}
</script>

<template>
  <PageHeader header="{{article.title}}" />
  <p>{{article.body}}</p>
  <p>{{article.tags}}</p>
  <p>{{article.created}}</p>

</template>