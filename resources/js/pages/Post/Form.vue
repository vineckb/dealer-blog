<template>
  <div>
    <div v-if="loading" class="text-center my-5">
      <b-spinner />
    </div>
    
    <div class="my-3" v-if="!loading">
      <h1 v-if="!id">Create new post</h1>
      <h1 v-if="id">Edit post</h1>

      <b-form @submit.prevent="submit">
        <b-form-group
          label="Post title"
          label-for="input-title">

          <b-form-input
            id="input-title"
            v-model="title"
            type="text"
            required />
        </b-form-group>

        <b-form-group label="Post Image">
          <b-form-file
            v-model="$data.$image"
            :state="Boolean($data.$image)"
            accept="image/jpeg, image/png, image/gif"
            placeholder="Choose a image or drop it here..."
            drop-placeholder="Drop image here..."
          ></b-form-file>
        </b-form-group>
        
        <b-form-group
          label="Post content"
          label-for="input-textarea">
          
          <b-form-textarea
            id="textarea"
            v-model="text"
            rows="3"
            max-rows="6" />
        </b-form-group>

        <b-btn @click="reset" variant="link">Cancel</b-btn>
        <b-btn type="submit">Publish</b-btn>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      id: null,
      title: '',
      image: '',
      $image: null,
      text: ''
    }
  },

  created () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;

      this.load();
    }
  },

  methods: {
    submit () {
      // @todo: send to api
      console.log('send post form');
    },

    load () {
      // @todo: load data from api
      this.loading = true;

      this.title = 'loaded title';
      this.text = 'loaded text';

      window.setTimeout(() => this.loading = false, 2000);
    },

    reset () {
      if (!this.id) {
        this.title = '';
        this.image = null;
        this.text = '';

        return;
      }

      this.load();
    }
  }
}
</script>