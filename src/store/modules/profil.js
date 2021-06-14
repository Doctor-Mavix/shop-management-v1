const state ={
    sidebar : {
        actif: 'profil information',
    }

}

const getters ={
    SideBarState : (state)=>state.sidebar

}

const mutations ={
    // Edit modal
    ACTIVE_SIDE(state,actif){
        state.sidebar.actif = actif
    },
    

}

const actions ={
    // Edit modal
    activeSide :({commit},actif)=>{
        commit('ACTIVE_SIDE',actif)
    },
   
}

export default {
    state,
    getters,
    mutations,
    actions
}