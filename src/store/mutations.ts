import Vue from 'vue'
import * as types from './mutation-types'
import {Message, State} from "./state";

export interface ReceiveAllPayload {
  messages: Message[]
}

export interface ReceiveMessagePayload {
  message: Message
}

export interface SwitchThreadPayload {
  id: string
}

// parenthesis are needed
export default ({
  [types.RECEIVE_ALL] (state: State, { messages }: ReceiveAllPayload) {
    let latestMessage: Message | undefined
    messages.forEach(message => {

      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }
      // mark the latest message
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      // add message
      addMessage(state, message)
    })
    // set initial thread to the one with the latest message
    if (latestMessage) {
      setCurrentThread(state, latestMessage.threadID)
    }
  },

  [types.RECEIVE_MESSAGE] (state: State, { message }: ReceiveMessagePayload) {
    addMessage(state, message)
  },

  [types.SWITCH_THREAD] (state: State, { id }: SwitchThreadPayload) {
    setCurrentThread(state, id)
  }
})

function createThread (state: State, id: string, name: string) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}

function addMessage (state: State, message: Message) {
  // add a `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  // add it to the messages map
  Vue.set(state.messages, message.id, message)
}

function setCurrentThread (state: State, id: string) {
  state.currentThreadID = id
  if (!state.threads[id]) {
    debugger
  }
  // mark thread as read
  state.threads[id].lastMessage!.isRead = true
}
