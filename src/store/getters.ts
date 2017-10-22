import {GetterTree} from "vuex";
import {Message, State, Thread} from "./state";

export const threads = (state: State) => state.threads

export const currentThread = (state: State): Thread => {
  return state.currentThreadID
    ? state.threads[state.currentThreadID]
    : {} as Thread
}

export const currentMessages = (state: State): Array<Message> => {
  const thread = currentThread(state)
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : []
}

export default ({
  threads,
  currentThread,
  currentMessages,
}) as GetterTree<State, any>
