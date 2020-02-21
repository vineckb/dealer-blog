<template>
  <div class="my-5">
    <b-spinner v-if="loading" />
    
    <b-form @submit.prevent="submit">
      <b-form-group
        label="Full Name"
        label-for="input-name">

        <b-form-input
          id="input-name"
          v-model="name"
          :disabled="loading"
          type="text"
          required />

      </b-form-group>

      <b-form-group label="Avatar">
        <b-form-file
          v-model="$data.$avatar"
          :disabled="loading"
          :state="Boolean($data.$avatar)"
          accept="image/jpeg, image/png, image/gif"
          placeholder="Choose a image or drop it here..."
          drop-placeholder="Drop image here..."
        ></b-form-file>
      </b-form-group>
      
      <b-form-group
        label="Email"
        label-for="input-email">

        <b-form-input
          id="input-email"
          v-model="email"
          :disabled="loading"
          type="email"
          disabled
          required />

      </b-form-group>
      
      <b-btn block variant="danger" class="mb-3">Change password</b-btn>
      
      <b-button type="submit" variant="primary" :disabled="loading">Save changes</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      name: '',
      avatar: 'https://placekitten.com/300/300',
      $avatar: null,
      email: '',
      password: ''
    }
  },

  created () {
    this.load();
  },

  methods: {
    load () {
      this.loading = true
      // @todo: get data from api
      setTimeout(() => this.loading = false, 2000)
    },

    submit() {
      // @todo: send data to api
      console.log('register')
      this.loading = true;
      setTimeout(() => this.loading = false, 2000)

    }
  }
}
</script>