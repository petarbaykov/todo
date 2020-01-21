import Home from '../pages/Home.vue'
import Elements from '../pages/Elements.vue'
export default [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: route => ({ query: route.query })
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements,
      props: route => ({ query: route.query })
    }
]
