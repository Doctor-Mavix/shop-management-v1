import axios from 'axios'

const state ={
    Contact :{
    }
   
}

const getters = {
    ContactState : (state)=>state.Contact
    
}

const mutations ={
    
    GET_CONTACT(state,data){
        state.Contact = data
    },  
    
    
    LOGIN(){
        
    }
 
    
    
}

const actions = {
    getContact({commit}){
        
        axios
            .get('/contact/admin')
                .then(res=>{
                    commit('GET_CONTACT',res.data)
                })
                .catch(err=>{
                    console.log(err);
                })
    },
    
    contactUse({commit},information){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/contact/public',information)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        reject(error)
                    })
        })

    },
    
    
    
}

export default {
    state,
    getters,
    mutations,
    actions
}