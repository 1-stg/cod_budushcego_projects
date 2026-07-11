<script>
import axios from 'axios';
axios.defaults.baseURL = 'https://cryptoapi-qr0r.onrender.com/currentprice';

export default {
  data() {
    return {
      currencies: []
    }
  },
  methods: {
    async loadСurrencies() {
      let response = await axios.get();
      this.currencies = response.data.bpi
    }
  },
  mounted() {
    this.loadСurrencies()
  }

};
</script>

<template>
  <ul class="list-group">
    <li class="list-group-item active" aria-current="true">Курс Биткоина</li>
    <li class="list-group-item" v-for="(value,key) in currencies" :key="key">{{ value.code }}: {{ value.rate }}</li>

  </ul>
</template>

<style></style>