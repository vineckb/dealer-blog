<template>
  <b-card
    :img-src="user.avatar"
    :img-alt="user.name"
    img-left
    class="mb-3">

    <b-card-text>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      
      <b-form-radio-group
        v-model="role"
        :options="roles"
        @change="handleChange"
        :disabled="loading"
        buttons
        name="radios-btn-default"
      ></b-form-radio-group>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      role: this.user.role,
      roles: [
        { text: 'Administrator', value: 'admin' },
        { text: 'Publisher', value: 'publisher' }
      ]
    }
  },

  props: {
    user: {
      type: Object,
      required: true
    }
  },
  
  methods: {
    handleChange(value) {
      this.loading = true;
      console.log(`Changing role of user#${this.user.id} from ${this.selected} to ${value}`)
      this.user.role = value
      setTimeout(() => this.loading = false, 1000)
    }
  }
}
</script>

<style scoped>
.card-img-left {
  max-width: 150px;
}
</style>