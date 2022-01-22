import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../components/Contacts/ContactList.vue'
import ContactAdd from '../components/Contacts/ContactAdd.vue'

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/contact-add',
    name: 'ContactAdd',
    component: ContactAdd
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
