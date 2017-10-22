import * as api from '../apis'
import * as types from './mutation-types'
import {ActionTree} from "vuex";
import {State, Thread} from "./state";

export const getAllMessages = ({ commit }: any) => {
  api.getAllMessages()
    .then(messages  => {
      commit(types.RECEIVE_ALL, {
        messages
      })
    })
}

export interface SendMessageActionPayload {
  text: string
  thread: Thread
}

export const sendMessage = ({ commit }: any, payload: SendMessageActionPayload) => {
  api.createMessage(payload)
    .then(message => {
    commit(types.RECEIVE_MESSAGE, {
      message
    })
  })
}

export interface SwitchThreadActionPayload {
  id: string
}

export const switchThread = ({ commit }: any, payload: SwitchThreadActionPayload) => {
  commit(types.SWITCH_THREAD, payload)
}


export default {
  getAllMessages,
  sendMessage,
  switchThread,
} as ActionTree<State, any>
