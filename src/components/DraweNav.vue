<template>
    <div id="drawer" v-if="drawerState.statut == true">
      <div class="header d-flex justify-space-between">
        <div class="head">
           <a href="" class="mt-8 ml-3 ">
              <p class="nom white--text">Alex Louange <v-icon  text icon color="white ">mdi-check-decagram</v-icon></p>
              <p class="white--text">alexmail@gmail.com</p>
            </a>
        </div>
        <span class="close text-center mx-2 py-2 white--text" @click="closeDrawer">X</span>

      </div>
       <div  class="main " >
         <!-- main drawer nav content -->

        <div class="pt-1 ml-2" v-if="drawerState.main == true">
          <!-- our pages -->
          <div class="drawer-item pt-0 px-3 ">
           
            <router-link to="/" class="my-4 "><v-icon color=" ">mdi-home </v-icon> <span class="ml-2">Acceuil </span> </router-link>

            <router-link to="/market"   class="my-4 "><v-icon color=" ">mdi-basket</v-icon> <span class="ml-2">Marcher </span> </router-link>

            <router-link to="/blog" class="my-4 "><v-icon color=" ">mdi-speaker-wireless</v-icon> <span class="ml-2">Publicite / Annonce </span> </router-link>
            
            <router-link to="/today" class="my-4 "><v-icon color=" ">mdi-wallet-giftcard</v-icon> <span class="ml-2">Offre du jours</span> </router-link>
         
          </div>
          <!-- My account -->
          <div class="drawer-item pt-1 px-3 ">
            <a @click.prevent="goToRoute('/profil')" class="my-4 " ><v-icon color=" ">mdi-account</v-icon> <span class="ml-2">Mon profil</span></a>
            <a @click.prevent="goToRoute('/profil')" class="my-4 " ><v-icon color=" ">mdi-map-marker-outline</v-icon> <span class="ml-2">Cotonou</span></a>
            <a @click.prevent="goToRoute('/favorite')" class="my-4 " ><v-icon color=" ">mdi-heart</v-icon> <span class="ml-2">Favorie</span></a>
          </div>

          
          <!-- Maake monney whith us -->
          <div class="drawer-item pt-1 px-3 ">
            <a v-for="page in makeMonney" :key="page.url" :to="page.url" class="my-4 " ><v-icon color=" ">{{page.icon}}</v-icon> <span class="ml-2">{{page.name}}</span></a>
          </div>
          
         
        </div>

        <!-- drawer nav boutique -->
        <!-- <div class="pt-1 ml-2" v-if="drawerState.boutiques == true">
          <div class="d-flex justify-space-between">
            <h3>Marchers :</h3> 
            <a href="" @click.prevent="closeDrawerBoutique" class="mr-2"> retour </a>
          </div>

          <div class="drawer-item pt-1 px-3 " v-for="page in boutiques" :key="page.url">
            <a  :to="page.url" class="my-2 " > <span class="ml-2">{{page.name}}</span></router-link>
          </div>

        </div> -->
        <div class="footer d-flex justify-space-between align-end">
          <div>

          </div>
          <div class="auth">
            <router-link to="/login" class="mr-3 px-2 rounded py-1">Se déconnecter</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';


export default {
    methods:{
        ...mapActions([
        'closeDrawer',
        'showBoutiques',
        'closeDrawerBoutique'
        ]),
        goToRoute(routeName){
          this.closeDrawer()

          this.$router.push(routeName)
        }
    },
    computed : {
        ...mapGetters([
        'drawerState']
        ),
    },
    data(){
        return {
              pages : [
              {
                name:"Acceuil",
                icon:"mdi-home",
                url :'/home'
              },
              {
                name:"Boutique",
                icon:"mdi-basket",
                url :'/boutique'
              },
              {
                name:"Publicite / Annonce",
                icon:"mdi-speaker-wireless",
                url :'/blog'
              },
              {
                name:"Promo Noël",
                icon:"mdi-wallet-giftcard",
                url :'/blog'
              },
              
            ]
            ,
            makeMonney :[
              {
                name:"Devenir vendeur",
                icon:"mdi-shopping",
                url :'/vendeur'
              },
              {
                name:"Faire de l'affiliation",
                icon:"mdi-currency-usd-circle",
                url :'/affiliation'
              },
              {
                name:"Envoyer un message",
                icon:"mdi-android-messages",
                url :'/contact'
              },

            ]
            ,
            myAccount :[
              {
                name:"My account",
                icon:"mdi-account",
                url :'/profil'
              },
              {
                name:"Bénin",
                icon:"mdi-map-marker-outline",
                url :'/Localisation'
              },
              {
                name:"Favorie",
                icon:"mdi-heart",
                url :'/favorites'
              },
              {
                name:"Moyens de payement",
                icon:"mdi-contactless-payment",
                url :'/payement-method'
              },

            ],
            options : [
              {
                name:"Marcher",
                url :"/marcher"
              },
              {
                name:"Blog",
                url :"/"
              },
              {
                name:"Vendre sur Tokpa",
                url :"/"
              },
              {
                name:"Faire de l'affiliation",
                url :"/"
              }
            ],
            // drawer nav boutiques 
            boutiques : [
              {
                name:"Informatiques & electronique",
                icon:"mdi-account",
                url :'/account'
              },
            ]
        }
    }

}
</script>

<style>
#drawer {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.712);
  top: 0;
  position: fixed;
  z-index: 20;
  color: black;
}
#drawer .header {
  background: linear-gradient(#001370,#1736d1);
  width: 20vw;
  height: 20vh;
}
#drawer .main {
  width: 20vw;
  height: 100%;
  background: rgb(223, 223, 223);
  transition:.3s all ease-in-out;
}
#drawer a{
  display: block;
  color: black !important;
}

#drawer .drawer-item {
  border-top: 1px solid rgba(128, 128, 128, 0.376);
}
#drawer .drawer-item:first-child{
  border: none;
}
#drawer .footer {
  height: 15vh;
}
#drawer .footer  .auth a{
  background: #001370;
  color: white !important;
}
.drawer .payement-method {
  color: rgb(255, 255, 255);
  background: rgb(3, 205, 241);
}
.drawer .logout {
  color: rgb(0, 132, 255) !important;
}

.drawer .login {
  color: rgb(255, 255, 255);
  background: #001370;
}
.drawer .sign-up {
  color: rgb(255, 255, 255);
  background: rgb(3, 205, 241);
}
#drawer .close {
  cursor: pointer;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
}
.drawer .close:hover {
  background: rgba(0, 0, 0, 0.568);
  
}
.drawer .domaine {
  overflow-y: scroll;
  height: 55vh;
  width: 70vw;
}
.drawer .domaine a{
  display: block;
  color: white;
}
@media screen and (max-width: 1050px) {
  #drawer .domaine {
    width: 35vw;
  }
  #drawer .header , #drawer .main {
    width: 35vw;
  }
  #drawer .footer {
  height: 18vh;
}
}
@media screen and (max-width: 950px) {
  #drawer .domaine {
    width: 40vw;
  }
  #drawer .header , #drawer .main {
    width: 40vw;
  }
  #drawer .footer {
  height: 18vh;
}
}
@media screen and (max-width: 599px) {
  #drawer .domaine {
    width: 60vw;
  }
  #drawer .header , #drawer .main {
    width: 75vw;
  }
  #drawer .footer {
  height: 18vh;
}
}
</style>