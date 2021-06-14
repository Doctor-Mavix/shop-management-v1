import axios from 'axios'

const state ={
   
}

const getters = {
    
    
}

const mutations ={
    
    LOGIN(){
        
    }
 
    
    
}

const actions = {
    
    adminLogin({commit},user){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/admin/login',user)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        
                        reject(error)
                    })
        })

    },
    logout() {
        localStorage.setItem("token", "");
        this.$router.push("/admin/login");
      },
    
}

export default {
    state,
    getters,
    mutations,
    actions
}