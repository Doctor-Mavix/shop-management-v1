import axios from "axios";

const state = {
    bilan :{}        
};

const getters = {
    bilanState :(state)=> state.bilan
};

const mutations = {
    GET_BILAN(state,bilan){
        state.bilan = bilan
    } 
};

const actions = {

    getBilan({commit}){
        return new Promise((resolve,reject )=>{
            axios
            .get("/bilan/all")
                .then(response=>{
                    commit("GET_BILAN",response.data)
                    resolve(response.data)
                },error =>{
                    reject(error);
                })

        })
    }
    
  
            
    };
    export default {
        state,
        getters,
        actions,
        mutations
    }