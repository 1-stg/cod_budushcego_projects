<script>
import ImageGallery from './components/ImageGallery.vue';
import ToDoList from './components/ToDoList.vue';
import TroykaApp from './components/TroykaApp.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {
    TroykaApp,
    ImageGallery,
    ToDoList
  }
}
</script>

<template>
  <troyka-app></troyka-app>
  <image-gallery></image-gallery>
  <to-do-list></to-do-list>
</template>

<style >
</style>
