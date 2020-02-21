<template>
  <div class="mt-3">
    <UserCard
      v-for="user in users"
      :key="user.id"
      :user="user" />
  </div>
</template>

<script>
import UserCard from '../components/UserCard';

export default {
  components: { UserCard },

  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Vinicius',
          email: 'vineckb@gmail.com',
          role: 'admin',
          avatar: 'https://placekitten.com/300/300'
        }
      ]
    }
  }
}
</script>