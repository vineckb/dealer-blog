<template>
  <div>
    <div v-if="loading" class="text-center my-5">
      <b-spinner />
    </div>

    <div v-if="!loading">
      <h1>
        {{ post.title }}

        <b-button size="sm" :href="`/posts/${post.slug}/edit`">
          <b-icon-pencil></b-icon-pencil>
          Edit
        </b-button>
      </h1>

      <b-img :src="post.image" :alt="post.title" fluid />

      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,

      post: {
        id: 1,
        title: 'Title',
        slug: 'title',
        image: 'https://picsum.photos/600/300/?image=25',
        text: 'long text...'
      }
    }
  },

  created () {
    // @todo: get data from api
  }
}
</script>