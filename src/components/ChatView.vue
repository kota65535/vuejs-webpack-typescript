<style src="../css/chat.css"></style>

<template>
  <div class="chatapp">
    <thread-section-component></thread-section-component>
    <message-section-component></message-section-component>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ThreadSectionComponent from './ThreadSectionComponent.vue'
  import MessageSectionComponent from './MessageSectionComponent.vue'
  import Component from 'vue-class-component'

  @Component({
    components: {
      ThreadSectionComponent,
      MessageSectionComponent
    }
  })
  export default class ChatView extends Vue {
  }
</script>

