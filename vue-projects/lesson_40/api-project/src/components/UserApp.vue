<script>
import axios from 'axios';
axios.defaults.baseURL = 'https://api.agify.io';

export default {
  data() {
    return {
      users: ['Nastya', 'Ivan', 'Anton', 'Alex', 'Sofia', 'Olga'],
      age: '',
      user: '',
    }
  },
  methods: {
    async getAge(user) {
      let response = (await axios.get(`?name=${user}`)).data;
      this.age = response.age;
      this.user = response.name; 
    }
  }
};
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item active" aria-current="true">Возраст юзера <span v-if="user">{{ user }}: {{ age }}</span></li>
    <li class="list-group-item" v-for="(username) in users">
      <h2>{{ username }}</h2><button class="btn btn-danger" @click="getAge(username)">Узнать возраст</button>
    </li>
  </ul>
</template>

<style></style>