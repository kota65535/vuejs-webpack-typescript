import Vue from 'vue'
import Router, {RouterOptions} from 'vue-router'
import ChatView from '@/components/ChatView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: ChatView
    }
  ]
} as RouterOptions)
