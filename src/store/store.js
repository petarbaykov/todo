// TODO: store is currently unused, but added for future convenience
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks:[]
  },
  getters: {
    tasks({ tasks }){
      return tasks
    }
  },
  mutations: {
    setTask(state, payload) {
      state.tasks.unshift(payload)
      localStorage.setItem("tasks",JSON.stringify(state.tasks))
    },
    setTasks(state, payload) {
      state.tasks = payload
    },
    finishTask(state, id) {
      state.tasks = state.tasks.map(t => t.id == id ? { ...t, finished:true } : t)
      localStorage.setItem("tasks",JSON.stringify(state.tasks))
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(t => t.id !== id)
      localStorage.setItem("tasks",JSON.stringify(state.tasks))
    }
  },
  actions: {
    async setTask({ commit, dispatch }, task) {
      let id = await dispatch('getNextId')
      task.id = id
      commit('setTask', task)
    },
    getNextId({ state }) {
      return state.tasks.length ? state.tasks.reduce((p,c) => (p.id > c.id) ? p : c).id + 1 : 0
    },
    getTasks({ commit }) {
      let tasks = localStorage.getItem("tasks")
      if(tasks) {
        tasks = JSON.parse(tasks)
        commit('setTasks', tasks)
      }
    }
  },
  modules: {
    
  }
})

export default store
