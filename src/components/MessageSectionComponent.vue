<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" ref="list">
      <message-component
              v-for="message in sortedMessages"
              :key="message.id"
              :message="message">
      </message-component>
    </ul>
    <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import MessageComponent from './MessageComponent.vue'
  import Component from 'vue-class-component'
  import {Action, Getter} from 'vuex-class'
  import {Watch} from 'vue-property-decorator'
  import {Message, Thread} from '../store/state';
  import {CreateMessageRequest} from "../apis/index";

  @Component({
    components: { MessageComponent }
  })
  export default class MessageSectionComponent extends Vue {
    @Getter('currentThread') thread: Thread
    @Getter('currentMessages') messages: Array<Message>
    @Action('sendMessage') sendMessageAction: (payload: CreateMessageRequest) => void

    get sortedMessages (): Array<Message> {
      return this.messages
        .slice()
        .sort((a: Message, b: Message) => a.timestamp - b.timestamp)
    }

    @Watch('thread.lastMessage')
    onLastMessageChanged () {
      this.$nextTick(() => {
        const ul: any = this.$refs.list
        ul.scrollTop = ul.scrollHeight
      })
    }

    sendMessage (e: any) {
      const text: string = e.target.value
      if (text.trim()) {
        this.sendMessageAction({ text: text, thread: this.thread } as CreateMessageRequest)
//        e.target.value = <any>''
        e.target.value = ''
      }
    }
  }
</script>
