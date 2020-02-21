<template>
  <b-card
    :title="post.title"
    :img-src="post.image"
    :img-alt="post.title"
    img-top
    tag="article"
    class="mb-2">

    <b-button :href="`/posts/${post.slug}`" variant="primary">Read more</b-button>
    <b-button :href="`/posts/${post.slug}/edit`" variant="secondary">Edit</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>