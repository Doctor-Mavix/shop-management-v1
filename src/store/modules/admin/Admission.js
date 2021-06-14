import axios from 'axios'

const state ={
    admissions :[],//Array of admission appication

    admission :{}//A specific (one) admission appication
}

const getters = {
    admissionApplicationsGetters : (state)=>state.admissions ,

    admissionApplicationGetters : state=> state.admission  
    
}

const mutations ={
    

    GET_ADMISSION_APPLICATIONS(state,admissionApplications){
        state.admissions = admissionApplications.data
    },

    GET_ADMISSION_APPLICATION(state,admissionApplication){
        state.admission = admissionApplication.data
       
    },
    INITIALIZE_ADMISSION(state){
        state.admission = {}
       
    },
    
}

const actions = {
    
    //Get array of admission application
    getAdmissionApplications : ({commit})=>{
        
        axios 
            .get('/admission/admin')    
                .then (res=>{
                    commit('GET_ADMISSION_APPLICATIONS',res)

                })
                .catch(err =>{
                    console.log(err);
                })
    },

    //Get the specific (one) admission application
    getAdmissionApplication : ({commit},id)=>{
        commit('INITIALIZE_ADMISSION')
        axios 
            .get(`/admission/admin/${id}`)
                .then(res=>{
                    commit('GET_ADMISSION_APPLICATION',res)

                })

    },

    acceptAdmissionApplication : ({commit},form)=>{
  
        return new Promise((resolve,reject)=>{
            axios 
            .put('/admission/admin/'+form.id,form.data)
                .then(res=>{
                    // console.log(res);
                    resolve(res.data)
                },error =>{
                    reject(error);
                })
                
        commit('LOGIN')
        })
      
    
   

    },
    
    deleteAdmissionDocument({commit},document){
        // console.log(document);
        
        commit('LOGIN')

        return new Promise ((resolve,reject)=>{
            axios 
                .post("/admission/delete/document",document)
                    .then(res=>{
                    resolve(res.data)
                    },error=>{
                        reject(error)
                    })
                    
                })    
    },
    deleteAdmission({commit},id){
        
        commit('LOGIN')

        return new Promise ((resolve,reject)=>{
            axios 
                .delete("/admission/admin/"+id)
                    .then(res=>{
                        resolve(res.data)
                    },error=>{
                        reject(error)
                    })
                    
                })    
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}