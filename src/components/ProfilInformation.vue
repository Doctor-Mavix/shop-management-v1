<template>
  <div class=" profil-information">
    <div class="barner">
          
    </div>
    <div class="head px-md-12">
        <div class="infos">
            
                <div class="d-flex detail">
                    <div class="profil-img">
                        <img src="../assets/stock/profil/profil (2).jpg" class="" alt="">
                    </div>
                    <div class="mt-5 ml-3">
                        <div>
                            <h3 class="white--text mb-3">John Alden</h3>
                            <p class="white--text"><v-icon color="white" class="mr-">mdi-map-marker-outline</v-icon> Cotonou</p>
                            
                        </div>
                        <!-- Je veux ajouter les icons des methodes de payement disponible -->
                        <div class="d-flex justify-space-between white-part">
                            <div class="mt-3">
                                <div>
                                    <span class="green mx-2 rounded-circle py-1 px-3"></span>
                                    <span class="yellow mx-2 rounded-circle py-1 px-3"></span>
                                    <span class="red rounded-circle mx-2 py-1 px-3"></span>
                                    <span class="bg-primaire rounded-circle mx-2 py-1 px-3"></span>

                                </div>
                                <!-- <span class=""><v-icon class="red--text">mdi-gmail</v-icon> </span> -->
                            </div>
                            <div class="d-flex">
                                <div class="mr-12">
                                    <p class="text-h4 text-center">139</p>
                                    <p>Achats</p>
                                </div>
                                <div>
                                    <p class="text-h4 text-center">38</p>
                                    <p>Annonces</p>
                                </div>
                                <div class="ml-12">
                                    <p class="text-h4 text-center ">38</p>
                                    <p class="r">Affiliation</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <!-- <router-link to="" class="bg-primaire white--text px-3 py-1 rounded">Modifier les informations de mon profil</router-link> -->
                        </div>
                    </div>
                </div>
            
        </div>
    </div>

    <div class="my-5 mx-md-8 px-5 py-5 white rounded">
        <h3>Information sur mon profil</h3>
        <v-row class="mt-5">
            <v-col
            cols="12"
            md="6"
            lg="4"
            >
                <div class="">
                    <p class="bold">Nom et Prenom : <span class="lighter">John Alden</span></p>
                </div>
            </v-col>
            <v-col
            cols="12"
            md="6"
            lg="4"
            >
                <div class="">
                    <p class="bold">Numero de telephone : <span class="lighter">022965749009</span></p>
                </div>
            </v-col>
            <v-col
            cols="12"
            md="6"
            lg="4"
            >
                <div class="">
                    <p class="bold">Numero whatsapp: <span class="lighter">022965749009</span></p>
                </div>
            </v-col>
            <v-col
            cols="12"
            md="6"
            lg="4"
            >
                <div class="">
                    <p class="bold">Pays de residence: <span class="lighter">Benin</span></p>
                </div>
            </v-col>
            <v-col
            cols="12"
            md="6"
            lg="4"
            >
                <div class="">
                    <p class="bold">Ville de residence: <span class="lighter">Cotonou</span></p>
                </div>
            </v-col>
        </v-row>

        <div>
            <a href="" @click.prevent="showProfilEdit" class="white--text bg-primaire px-5 py-2 rounded">Modifier</a>
        </div>
    </div>

    <div class="my-5 mx-md-8 px-5 py-5 white rounded">
        <h3>Moyens de payement</h3>

        <div>
            <!-- List des moyens de payements ajouter (Image Nom) -->
        </div>
        <div class="mt-5">
            <a href="" @click.prevent="showAddPayementMethod()" class="primaire py-2">Ajouter un moyens de payement</a>
        </div>
    </div>

      
      <!-- Fenetre modale qui peut etre Afficher suite a une action -->
    <edit-profil/>

    <payment-method/>
  </div>
</template>

<script>
import EditProfil from './EditProfil.vue'
import {mapActions} from 'vuex'
import PaymentMethod from './PaymentMethod.vue'


export default {
  components: { EditProfil, PaymentMethod },
    methods: {
        ...mapActions (['showProfilEdit','showAddPayementMethod']),
    
        
    },
}
</script>

<style>
.profil-information .barner {
    background: url(../assets/stock/blog/1.jpg) center center;
    height: 35vh;
    width: 100%;
    background-size: cover;
    position: relative;

}

.profil-information .barner::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.479);
}

.profil-information .barner *{
    z-index: 3;
}

.profil-information  .head {
    position: relative;
    background: white;
    width: 100%;
    height: 8rem;
}
.profil-information  .head .infos{
    position: absolute;
    top: -6rem;
}
.profil-information  .profil-img img{
    width: 13rem;
    height: 13rem !important;
    border-radius: 50%;
}

.profil-information  .head .infos .detail{
    width: 73vw;
}

.profil-information  .head .infos .detail .white-part{
    width: 57vw;
}

</style>