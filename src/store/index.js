import Vue from 'vue'
import Vuex from 'vuex'
import resume from './modules/resume'
import profile from './modules/profile'
// import createLogger from '../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    resume,
    profile,
  },
  strict: debug,
//   plugins: debug ? [createLogger()] : []
})