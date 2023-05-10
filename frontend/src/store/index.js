import { createStore } from 'vuex'

import router from '@/router'

export default createStore({
  state: {
    userIsConnected: true,
    username: null
  },
  getters: {
  },
  mutations: {
    CONNECTION(state, username){
      state.userIsConnected = true;
      state.username = username;
    },
    DISCONNECTION(state){
      state.userIsConnected = false;
      state.username = null;
    }
  },
  actions: {
    connection(context, username){
      context.commit('CONNECTION', username);
    },
    disconnection(context){
      context.commit('DISCONNECTION');
      //redirige l'utilisateur vers la page de connexion
      router.push('/login');
      console.log('Déconnexion réussie');
    }
  },
  modules: {
    
  }
})
