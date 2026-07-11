<script>
import ImageGallery from './components/ImageGallery.vue';
import NotesApp from './components/NotesApp.vue';
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
    ToDoList,
    NotesApp,
  }
}
</script>

<template>
  <troyka-app></troyka-app>
  <image-gallery></image-gallery>
  <to-do-list></to-do-list>
  <notes-app></notes-app>
</template>

<style >
</style>
