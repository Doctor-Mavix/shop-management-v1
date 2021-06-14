import axios from 'axios'

const state ={
    Facultys :{
        
    }
   
}

const getters = {
    FacultysState : (state)=>state.Facultys
    
}

const mutations ={
    
    GET_FACULTYS(state,data){
        state.Facultys = data
    },  
    
    
    LOGIN(){
        
    }
 
    
    
}

const actions = {
    getFacultys({commit}){
        
        axios
            .get('/admin/faculty')
                .then(res=>{
                    commit('GET_FACULTYS',res.data)
                })
                .catch(err=>{
                    console.log(err);
                })
    },
    
    addFaculty({commit},faculty){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/admin/faculty',faculty)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        // console.log(error);   
                        reject(error)
                    })
        })

    },
    editFaculty({commit},faculty){
        return new Promise((resolve,reject)=>{
            axios 
                .put('/admin/faculty/'+faculty._id,faculty.data)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        
                        reject(error)
                    })
        })

    },
    
    deleteFaculty({commit},_id){
        return new Promise((resolve,reject)=>{
            axios 
                .delete('/admin/faculty/'+_id)
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