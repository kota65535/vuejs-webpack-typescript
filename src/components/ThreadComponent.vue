<template>
  <li class="thread-list-item"
      :class="{ active: active }"
      @click="$emit('switch-thread', thread.id)"
  >
    <h5 class="thread-name">{{ thread.name }}</h5>
    <div class="thread-time">
      {{ thread.lastMessage.timestamp | time }}
    </div>
    <div class="thread-last-message">
      {{ thread.lastMessage.text }}
    </div>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {Thread} from "../store/state";
  import {Prop} from 'vue-property-decorator'

  @Component({
    props: {
      thread: Object,
      active: Boolean
    }
  })
  export default class ThreadComponent extends Vue {
    @Prop()
    thread: Thread
    @Prop()
    active: boolean
  }
</script>
