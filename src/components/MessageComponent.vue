<template>
  <li class="message-list-item">
    <h5 class="message-author-name">{{ message.authorName }}</h5>
    <div class="message-time">
      {{ message.timestamp | time }}
    </div>
    <div class="message-text">{{ message.text }}</div>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {
      message: Object
    }
  })
  export default class MessageComponent extends Vue {
  }
</script>
