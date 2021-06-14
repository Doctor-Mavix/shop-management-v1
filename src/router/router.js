import Vue from 'vue'
import Router from 'vue-router'

// public 
import Home from '@/views/public/Home'

import SchoolPresentation from '@/views/public/SchoolPresentation'

import FacutiesPrograms from '@/views/public/FacutiesPrograms'

import FeesFunding from '@/views/public/FeesFunding'

import Scholarship from '@/views/public/Scholarship'

import OnlineProgram from '@/views/public/OnlineProgram'

import Admission from '@/views/public/Admission'

import AdmissionForm from '@/views/public/AdmissionForm'


import Contact from '@/views/public/Contact'


// import viewProduct from '@/views/ViewProduct'

// student
import StudentHome from '@/views/student/Home'

import StudentProgramme from '@/views/student/Programme'

import StudentResultat from '@/views/student/Resultat'


// teacher

// admin
import Admin from '@/views/admin/App'

import AdminLogin from '@/views/admin/Login'


import AdminHome from '@/views/admin/Home'

import AdminProfil from '@/views/admin/Profil'

import AdminDepartment from '@/views/admin/Department'

import AdminFaculty from '@/views/admin/Faculty'

import AdminContactList from '@/views/admin/ContactList'

// import AdminContact from '@/views/admin/Contact'

import AdminSetting from '@/views/admin/Setting'


import AdminAdmission from '@/views/admin/Admission'

import AdminShowAdmission from '@/views/admin/ShowAdmission'



Vue.use(Router)

const routes= [{
    path: '/',
    name: 'Home',
    component: Home ,
    meta: {
        title: 'Afriford University',
        metaTags: [
          {
            name: 'description',
            content: 'Afriford University ,The purpose of education is to turn mirrors into windows'
          },
          {
            property: 'og:description',
            content: 'Afriford University ,The purpose of education is to turn mirrors into windows'
          }
        ]
      }
},
{
    path: '/school-presentation',
    name: 'SchoolPresentation',
    component: SchoolPresentation
},
{
    path: '/faculties-programs',
    name: 'FacutiesPrograms',
    component: FacutiesPrograms
},
{
    path: '/fees-funding',
    name: 'FeesFunding',
    component: FeesFunding
},
{
    path: '/scholarship',
    name: 'Scholarship',
    component: Scholarship
},
{
    path: '/online-program',
    name: 'OnlineProgram',
    component: OnlineProgram
},
{
    path: '/admission',
    name: 'Admission',
    component: Admission
},
{
    path: '/admission-form',
    name: 'AdmissionForm',
    component: AdmissionForm
},

{
    path: '/contact',
    name: 'Contact',
    component: Contact
},
// student rout
{
    path: '/student',
    name: 'StudentHome',
    component: StudentHome
},
{
    path: '/student/programme',
    name: 'StudentProgramme',
    component: StudentProgramme
},

{
    path: '/student/resultat',
    name: 'StudentResultat',
    component: StudentResultat
},
{
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
    beforeEnter(to,from,next){
        let token = localStorage.getItem('token')

        if(!token){
            next()
        }
        else{

            next('/admin/home')
        }


    }
},
 // admin root
 {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect:'admin/home',
    beforeEnter(to,from,next){
        let token = localStorage.getItem('token')

        if(token){
            next()
        }
        else{

            next('/admin/login')
        }


    },
    children:[
        
        
        {
            path: 'home',
            name: 'AdminHome',
            component: AdminHome
        },
        {
            path: 'profil',
            name: 'AdminProfil',
            component: AdminProfil
        },
        {
            path: 'department',
            name: 'AdminDepartment',
            component: AdminDepartment
        },
        {
            path: 'faculty',
            name: 'AdminFaculty',
            component: AdminFaculty
        },
        // {
        //     path: 'contact/:id',
        //     name: 'AdminContact',
        //     component: AdminContact
        // },
        {
            path: 'contact',
            name: 'AdminContactList',
            component: AdminContactList
        },
        
        {
            path: 'setting',
            name: 'AdminSetting',
            component: AdminSetting
        },
        {
            path: 'admission-applications',
            name: 'AdminAdmission',
            component: AdminAdmission
        },
        {
            path: 'admission-applications/:id',
            name: 'AdminShowAdmission',
            component: AdminShowAdmission
        },

    ]
 }
 ,
{
    path:'*',
    redirect:'/'
}

]



// 

const router =  new Router({
    mode:'history',
    routes
})



// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
  
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
  
      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');
  
      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
  
    next();
  });
  
  // ...


export default router