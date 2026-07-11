<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import JavascriptTest from './components/JavascriptTest.vue';
import PasswordInput from './components/PasswordInput.vue';


export default {
  components: {
    AppHeader,
    AppFooter,
    JavascriptTest,
    PasswordInput,
  },

  data() {
    return {
      text: `12345`,
      number: 47,
    }
  },

  methods: {
    plus() {
      this.number++;
    },
  }
}

</script>

<template>
  <header>
    <app-header></app-header>
  </header>
  <h1>Привет, {{ text }}!</h1>
  <button type="button" class="btn btn-dark" @click="plus">Привет</button>
  <h1>Привет, {{ number }}!</h1>

  <main class="m-5">
    <javascript-test></javascript-test>
    <password-input></password-input>
  </main>

  <footer>
    <app-footer></app-footer>
  </footer>
</template>

<style scoped></style>
