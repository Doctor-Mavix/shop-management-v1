import axios from 'axios'

const state ={
   

}

const getters = {
  
}

const mutations ={
    SEND_ADMISSION_FORM(){

    },

    
}

const actions = {
    sendAdmisionForm : ({commit},formulaire)=>{
        
        let fd =new FormData()
        for(let i =0 ; i< formulaire.files.length ; i++){
            fd.append("documents",formulaire.files[i] )

        }

        fd.append("surname",formulaire.surname )
        fd.append("othernames",formulaire.othernames )
        fd.append("email",formulaire.email )
        fd.append("birthdayDate",formulaire.birthdayDate )
        fd.append("birthdayPlace",formulaire.birthdayPlace )
        fd.append("nationality",formulaire.nationality )
        fd.append("city",formulaire.city )
        fd.append("state",formulaire.state )
        fd.append("country",formulaire.country )
        fd.append("address",formulaire.address )
        fd.append("phone",formulaire.phone )
        fd.append("idCard",formulaire.idCard )
        fd.append("languages",formulaire.languages )
        fd.append("courseChoice1",formulaire.courseChoice1 )
        fd.append("courseChoice2",formulaire.courseChoice2 )
        fd.append("admissionType",formulaire.admissionType )
        fd.append("previousDegre",formulaire.previousDegre )
        fd.append("studyMode",formulaire.studyMode )
      
        console.log(fd);
        return new Promise((resolve,reject)=>{
            axios 
            .post('/admission/student',fd)
                .then(res=>{
                    console.log(res);
                    resolve(res.data)
                },error =>{
                    console.log(error);
                    reject(error);
                })
                
        commit('SEND_ADMISSION_FORM')
        })
      
        

    },

   
    
}

export default {
    state,
    getters,
    mutations,
    actions
}