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
      state.tasks.push(payload)
    } 
  },
  actions: {
    setTask({ commit }, task) {
      commit('setTask', task)
    }
  },
  modules: {
    
  }
})

export default store
