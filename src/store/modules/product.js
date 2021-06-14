const state = {
    products : [
        {
            id : 1,
            name : 'I phone 10',
            description : 'scelle avec Pochetter 608',
            src:require('@/assets/stock/categories/1.jpg'),
            color:{
                active :'noir',
                available : [
                    'noir',
                    'rouge',
                    'blanc'
                ]

            },
            motto:'F CFA',
            price :570000,
            number :0,
            total_price :0,
            rating:{
                value:.5,
                vote_number:413
            },
            lenght :100,  //taille en mettre
            weight :100, //taille en kilogramme
            delivery : [
                    {
                        city:'Porto-Novo',
                        district : [
                            'Tokpota',
                            'Louho'
                        ]
                    },
                    {
                        city:'Cotonou',
                        district : [
                            'Wome',
                            'Akpakpa'
                        ]
                    },
                    
                ],
            inCart:false
                
        },
        {
            id : 2,
            name : 'I phone 10',
            description : 'scelle avec Pochetter 608',
            src:require('@/assets/stock/categories/2.jpg'),
            color:{
                active :'noir',
                available : [
                    'noir',
                    'rouge',
                    'blanc'
                ]

            },
            motto:'F CFA',
            price :570000,
            number :1,
            total_price :0,
            rating:{
                value:.5,
                vote_number:413
            },
            lenght :100,  //taille en mettre
            weight :100, //taille en kilogramme
            delivery : [
                    {
                        city:'Porto-Novo',
                        district : [
                            'Tokpota',
                            'Louho'
                        ]
                    },
                    {
                        city:'Cotonou',
                        district : [
                            'Wome',
                            'Akpakpa'
                        ]
                    },
                    
                ],
            inCart:false
                
        },
        {
            id : 3,
            name : 'I phone 10',
            description : 'scelle avec Pochetter 608',
            src:require('@/assets/stock/categories/3.jpg'),
            color:{
                active :'noir',
                available : [
                    'noir',
                    'rouge',
                    'blanc'
                ]

            },
            motto:'F CFA',
            price :570000,
            number :1,
            total_price :0,
            rating:{
                value:.5,
                vote_number:413
            },
            lenght :100,  //taille en mettre
            weight :100, //taille en kilogramme

            delivery : [
                    {
                        city:'Porto-Novo',
                        district : [
                            'Tokpota',
                            'Louho'
                        ]
                    },
                    {
                        city:'Cotonou',
                        district : [
                            'Wome',
                            'Akpakpa'
                        ]
                    },
                    
                ],
            inCart:true
                
        },
        {
            id : 4,
            name : "Amazon Essentials Men's Regular-Fit Long-Sleeve Flannel Shirt",
            description : 'scelle avec Pochetter 608',
            src:require('@/assets/stock/categories/1.jpg'),
            color:{
                active :'noir',
                available : [
                    'noir',
                    'rouge',
                    'blanc'
                ]

            },
            motto:'$',
            price :570000,
            number :1,
            total_price :0,
            rating:{
                value:.5,
                vote_number:413
            },
            lenght :100,  //taille en mettre
            weight :100, //taille en kilogramme
            delivery : [
                    {
                        city:'Porto-Novo',
                        district : [
                            'Tokpota',
                            'Louho'
                        ]
                    },
                    {
                        city:'Cotonou',
                        district : [
                            'Wome',
                            'Akpakpa'
                        ]
                    },
                    
                ],
            inCart:false
                
        },
        {
            id : 14,
            name : "Amazon Essentials Men's Regular-Fit Long-Sleeve Flannel Shirt",
            description : 'scelle avec Pochetter 608',
            src:require('@/assets/stock/categories/2.jpg'),
            color:{
                active :'noir',
                available : [
                    'noir',
                    'rouge',
                    'blanc'
                ]

            },
            motto:'$',
            price :570000,
            number :1,
            total_price :0,
            rating:{
                value:.5,
                vote_number:413
            },
            lenght :100,  //taille en mettre
            weight :100, //taille en kilogramme
            delivery : [
                    {
                        city:'Porto-Novo',
                        district : [
                            'Tokpota',
                            'Louho'
                        ]
                    },
                    {
                        city:'Cotonou',
                        district : [
                            'Wome',
                            'Akpakpa'
                        ]
                    },
                    
                ],
            inCart:false
                
        },
        
    ]
}

const getters = {
    products : (state) => state.products ,

    //product 
    product : (state) =>(id)=> state.products.filter(product => product.id == id),
    
    productTotalPrice : (state) =>(id)=>{
        const r = state.products.find(i=> i.id== id)       
        let result = r.price * r.number
        return result
     },
    viewProductNumber : (state) => (id) =>  state.products.find(i=> i.id== id).number,  
    // cart 
    cartList: (state) => state.products.filter(product => product.inCart == true)
}

const mutations = {
    //product
    //determmine le nombre de ce type de produit a acheter
    PRODUCT_NUMBER(state,e){
        const product = state.products.find(i=> i.id== e.id) 
        product.number =parseInt(e.value)
        
    },
    // cart 
    ADD_TO_CART (state,id){
        const product = state.products.find(i=> i.id== id)       
        if(product.inCart == false){
             product.inCart = true  
        } 
        else{
            product.inCart = false  
        }
    },

    REMOVE_TO_CART (state,id){
        state.products.find(i=> i.id== id).inCart = false
    }



}

const actions = {
    //product
    product_number ({commit},e){
        commit('PRODUCT_NUMBER',e)
    },
    // cart
    addToCart({commit},id){
        
        commit('ADD_TO_CART',id)
    },
    removeToCart({commit},id){
        commit('REMOVE_TO_CART',id)
    }, 
}

export default {
    state,
    getters,
    actions,
    mutations
}