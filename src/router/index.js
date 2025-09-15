import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import LoginView from '../views/loginView.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/tasks', name: 'Tasks', component: TaskView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
