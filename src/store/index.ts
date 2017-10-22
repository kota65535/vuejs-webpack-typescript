import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {State} from "./state";
import createLogger, {LoggerOption} from "vuex/dist/logger";

Vue.use(Vuex)

const state: State = {
  currentThreadID: null,
  threads: {},
  messages: {},
}

export default new Vuex.Store<State>({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  plugins: [createLogger({} as LoggerOption<State>)],
} as StoreOptions<State>)
