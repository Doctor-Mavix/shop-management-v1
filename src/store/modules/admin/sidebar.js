
const state = {
    
    sideNav : {
        statut :false,
        main : true ,
    }
    
};

const getters = {

    navState : (state) => state.sideNav
};

const actions = {
    // side nav 
    showSousNav: ({commit}) =>commit('SHOW_SOUS_NAV'),
    closeSousNav: ({commit}) =>commit('CLOSE_SOUS_NAV')
    
};

const mutations = {
    // drawer nav main
    SHOW_SOUS_NAV(state){
        state.sideNav.main = false
      },
    CLOSE_SOUS_NAV(state){
        state.sideNav.main = true
      }

};

export default {
    state,
    getters,
    actions,
    mutations
}