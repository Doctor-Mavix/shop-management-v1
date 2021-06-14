import axios from 'axios'

const state ={
    SchoolInformations :{
        bk:true
    }
   
}

const getters = {
    SchoolInformationState : (state)=>state.SchoolInformations
    
}

const mutations ={
    
    GET_SCHOOL_INFORMATIONS(state,data){
        state.SchoolInformations = data
    },  
    
    
    LOGIN(){
        
    }
 
    
    
}

const actions = {
    getSchoolInformations({commit}){
        
        axios
            .get('/admin/school-information')
                .then(res=>{
                    commit('GET_SCHOOL_INFORMATIONS',res.data)
                })
                .catch(err=>{
                    console.log(err);
                })
    },
    
    addSchoolInformation({commit},information){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/admin/school-information',information)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        reject(error)
                    })
        })

    },
    editSchoolInformation({commit},information){
        return new Promise((resolve,reject)=>{
            axios 
                .put('/admin/school-information/'+information._id,information.data)
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