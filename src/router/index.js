import Vue from 'vue'
import Router from 'vue-router'
import VacuumCleanerWorld from '@/components/VacuumCleanerWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: VacuumCleanerWorld.name,
      component: VacuumCleanerWorld
    }
  ]
})
