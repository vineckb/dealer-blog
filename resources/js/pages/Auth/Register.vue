<template>
  <div class="my-5">
    <b-form @submit.prevent="submit">
      <b-form-group
        label="Full Name"
        label-for="input-name">

        <b-form-input
          id="input-name"
          v-model="name"
          type="text"
          required
          placeholder="John Doe" />

      </b-form-group>
      
      <b-form-group
        label="Email"
        label-for="input-email">

        <b-form-input
          id="input-email"
          v-model="email"
          type="email"
          required
          placeholder="john.doe@gmail.com" />

      </b-form-group>
      
      <b-form-group
        label="Password"
        label-for="input-password">

        <b-form-input
          id="input-password"
          v-model="password"
          type="password"
          required
          placeholder="******" />

      </b-form-group>
      
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    submit() {
      console.log('register')
    }
  }
}
</script>