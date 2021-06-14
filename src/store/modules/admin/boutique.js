const state ={
    categories :[
        {   
            id:1,   
            name : 'Publicite',
            description :'Une petite description' ,
            keywords : ['first','second','third']
        },
        {   
            id:2,
            name : 'Recrutement',
            description :'Une petite description' ,
            keywords : ['first','second','third']
        },
        {   
            id:3,
            name : 'Offres de services',
            description :'Une petite description' ,
            keywords : ['first','second','third']
        }
    ],

    articles:[
        {   
            id:1,   
            name : 'Article 1',
            description :'Une petite description' ,
            keywords : ['first','second','third'],
            categorie:'Recrutement',
            client:'el hadj ',
            user:'Doctor Mavix'
        },
        {   
            id:2,
            name : 'Article 2',
            description :'Une petite description' ,
            keywords : ['first','second','third'],
            categorie:'Recrutement',
            client:'el hadj ',
            user:'Doctor Mavix'
        },
        {   
            id:3,
            name : 'Article 3',
            description :'Une petite description' ,
            keywords : ['first','second','third'],
            categorie:'Recrutement',
            client:'el hadj ',
            user:'Doctor Mavix'
        }
    ]
}

const getters ={
    categoriesState : (state) => state.categories,
    articlesState : (state) => state.articles
}

const mutations ={}

const actions = {
    /***********
     * categorie 
     */
    //create  or update  categorie 
    // saveCategorie({commit},categorie){

    // }


}

export default {
    state,
    getters,
    mutations,
    actions
}