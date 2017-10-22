<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span>
    </div>
    <ul class="thread-list">
      <thread-component
              v-for="thread in threads"
              :key="thread.id"
              :thread="thread"
              :active="thread.id === currentThread.id"
              @switch-thread="switchThread">
      </thread-component>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ThreadComponent from './ThreadComponent.vue'
  import Component from 'vue-class-component'
  import {Action, Getter} from 'vuex-class'
  import {Thread, Threads} from "../store/state";
  import {SwitchThreadPayload} from "../store/mutations";

  @Component({
    components: { ThreadComponent }
  })
  export default class ThreadSectionComponent extends Vue {
    @Getter threads: Threads
    @Getter currentThread: Thread
    @Action('switchThread') switchThreadAction: (payload: SwitchThreadPayload) => void

    get unreadCount () {
      const threads = this.threads
      return Object.keys(threads).reduce((count, id) => {
        return threads[id].lastMessage!.isRead
          ? count
          : count + 1
      }, 0)
    }

    switchThread (id: string) {
      this.switchThreadAction({ id: id } as SwitchThreadPayload)
//      this.$store.dispatch('switchThread', { id })
    }
  }
</script>
