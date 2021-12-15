import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    criterias: [],
    employers: [],
    variants: []
  },
  getters: {
    allCriterias: state => state.criterias,
    allVariants: state => state.variants
  },
  mutations: {
    setCriterias: (state, criterias) => (state.criterias = criterias),
    setVariants: (state, variants) => (state.variants = variants)
  },
  actions: {
    async fetchCriterias(){
      await axios.get(`http://127.0.0.1:8000/api/criterias`).then(response => {
        this.commit('setCriterias', response.data)
        // console.log(response.data)
      }).catch(err => console.log(err))
    },
    async fetchVariants(){
      await axios.get(`http://127.0.0.1:8000/api/variants`).then(response => {
        this.commit('setVariants', response.data)
        // console.log(response.data)
      }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
