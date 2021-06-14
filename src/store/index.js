import Vue from 'vue'
import Vuex from 'vuex'
import PublicAdmission from './modules/public/Admission' 
import PublicNavbar from './modules/public/Navbar' 

// univeral store
import Auth from './modules/admin/auth'

import Profil from './modules/admin/Profil' 

import Department from './modules/admin/Department' 

import Faculty from './modules/admin/Faculty' 

//Admin

import AdminAdmission from './modules/admin/Admission' 

import SchoolInformation from './modules/admin/SchoolInformation'

import Contact from './modules/admin/Contact' 

import Bilan from './modules/admin/Bilan' 


Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    PublicAdmission,
    PublicNavbar,
    Auth,
    Profil,
    Department,
    Faculty,
    AdminAdmission,
    SchoolInformation,
    Contact,
    Bilan
    
  }
})
