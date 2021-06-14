import axios from 'axios'

const state ={
    Departments :[]
   
}

const getters = {
    DepartmentsState : (state)=>state.Departments
    
}

const mutations ={
    
    GET_DEPARTMENTS(state,data){
        state.Departments = data
    },  
    
    
    LOGIN(){
        
    }
 
    
    
}

const actions = {
    getDepartments({commit}){
        
        axios
            .get('/admin/department')
                .then(res=>{
                    commit('GET_DEPARTMENTS',res.data)
                })
                .catch(err=>{
                    console.log(err);
                })
    },
    
    addDepartment({commit},department){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/admin/department',department)
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
    editDepartment({commit},department){
        return new Promise((resolve,reject)=>{
            axios 
                .put('/admin/department/'+department._id,department.data)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        
                        reject(error)
                    })
        })

    },
    
    deleteDepartment({commit},_id){
        return new Promise((resolve,reject)=>{
            axios 
                .delete('/admin/department/'+_id)
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