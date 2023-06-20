<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: {PageHeader},
  props: {
    slug: {
      type: String,
      required: true
    }
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