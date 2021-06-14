const state ={
    profil : {
        edit : false,
        payementMethod :false
    }

}

const getters ={
    ProfilModalState : (state)=>state.profil

}

const mutations ={
    // Edit modal
    SHOW_PROFIL_EDIT(state){
        state.profil.edit = true
    },
    CLOSE_PROFIL_EDIT(state){
        state.profil.edit = false 
      },
    // Add Payement Method modal
    SHOW_ADD_PAYEMENT_METHOD(state){
        state.profil.payementMethod = true
    },
    CLOSE_ADD_PAYEMENT_METHOD(state){
        state.profil.payementMethod = false 
      },


}

const actions ={
    // Edit modal
    showProfilEdit :({commit})=>{
        commit('SHOW_PROFIL_EDIT')
    },
    closeProfilEdit : ({commit}) => {
        commit('CLOSE_PROFIL_EDIT')
   
    },
    // Edit modal
    showAddPayementMethod :({commit})=>{
        commit('SHOW_ADD_PAYEMENT_METHOD')
    },
    closeAddPayementMethod : ({commit}) => {
        commit('CLOSE_ADD_PAYEMENT_METHOD')
   
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}