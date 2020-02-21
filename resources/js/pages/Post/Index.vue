<template>
  <div class="pt-3">
    <b-row cols="1" cols-md="3">
      <b-col 
        v-for="post in posts"
        :key="post.id">

        <PostCard :post="post" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PostCard from '../../components/PostCard';

export default {
  components: { PostCard },

  data(){
    return {
      posts: [
        {
          id: 1,
          title: 'Title',
          slug: 'title',
          image: 'https://picsum.photos/600/300/?image=25',
          text: 'long text...'
        },
        {
          id: 2,
          title: 'Title',
          slug: 'title',
          image: 'https://picsum.photos/600/300/?image=25',
          text: 'long text...'
        },
        {
          id: 3,
          title: 'Title',
          slug: 'title',
          image: 'https://picsum.photos/600/300/?image=25',
          text: 'long text...'
        },
        {
          id: 4,
          title: 'Title',
          slug: 'title',
          image: 'https://picsum.photos/600/300/?image=25',
          text: 'long text...'
        }
      ]
    }
  },

  created () {
    // @todo: get data from api
  }
}
</script>