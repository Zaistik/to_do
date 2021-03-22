import { createStore } from 'vuex'
import listes from './listes';

export default createStore({
  debug : true,
  modules: {
    listes
  }
})
