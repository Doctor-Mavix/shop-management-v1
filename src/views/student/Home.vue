<template>
  <div class="white">
      <navbar/>
      <div class="d-flex">
          <sidebar/>
          
          <div class="dash-main bg-dash">
              <div class="px-md-8 py-md-8">
                    <div>
                        <div>
                            <h3 class="">My profil</h3>
                        </div>

                        <v-row class="mt-5">
                            <v-col
                            cols="12"
                            md="3"
                            class="white px-5 py-6 rounded"
                            >
                                <div class="">
                                    <p><span class="bold">Nom :</span> LIKAK</p>
                                    <p><span class="bold">Prenoms :</span> Aman Herbivore</p>
                                    <p><span class="bold">Departement :</span> CIT</p>
                                    <p><span class="bold">Level :</span> 200</p>
                                    <p><span class="bold">Age :</span> 19 ans</p>
                                    <p><span class="bold">Centre :</span> Cotonou</p>
                                    <a href="" @click.prevent="PayeModal = true" class="red white--text px-3 py-1 rounded-pill">Payer la scolarite maintenant</a>
                                </div>
                            </v-col>
                            <v-col
                            cols="12"
                            md="8"
                            class="white px-5 py-2 rounded ml-md-6"
                            >
                                <v-row>
                                    <v-col
                                    cols="12"
                                    md="5"
                                    class=" "
                                    >   
                                    <p class="bold">Scolarite</p>
                                    <v-row>
                                        <v-col
                                        cols="4"
                                        >
                                                <div class=" d-flex justify-center align-center">
                                                    <v-progress-circular
                                                    :rotate="270"
                                                    :size="100"
                                                    :width="15"
                                                    :value="vald"
                                                    
                                                    
                                                    color="orange"
                                                    >
                                                    {{circleEffect(vald)}}
                                                    {{ vald }}%
                                                    </v-progress-circular>
                                                </div>
                                                
                                            </v-col>
                                            <v-col
                                            cols="7"
                                            offset-md="1"
                                            >
                                                <div class="mt-5">
                                                    <p><span class="orange rounded-circle mr-2 px-3 py-1"></span>Scolarite payee</p>
                                                    <p><span class="bg-dash rounded-circle mr-2 px-3 py-1"></span>Scolarite restante</p>
                                                </div>

                                            </v-col>
                                        </v-row>
                                        <div class="mt-1">
                                            <p><span class="bold">Scolarite payee:</span> 360.000 FCFA</p>
                                            <p><span class="bold">Scolarite restante :</span> 40.000 FCFA</p>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="mt-1">
                                            <p><span class="bold ">Boursiere:</span> non</p>
                                            <p><span class="bold">Peut composer :</span> oui</p>
                                        </div>
                                        <div class="d-flex">
                                            <div>
                                                <v-progress-circular
                                                    :rotate="270"
                                                    :size="50"
                                                    :width="5"
                                                    :value="50"
                                                    
                                                    color="red"
                                                    >
                                                    {{ 50 }}%
                                                </v-progress-circular>
                                            </div>
                                            <div class="ml-3 mt-3">
                                                <p>200 000 FCFA au moins en decembre</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div>
                                                <v-progress-circular
                                                    :rotate="270"
                                                    :size="50"
                                                    :width="5"
                                                    :value="70"
                                                    
                                                    color="blue"
                                                    >
                                                    {{ 70 }}%
                                                </v-progress-circular>
                                            </div>
                                            <div class="ml-3 mt-3">
                                                <p>200 000 FCFA au moins en Janvier</p>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-3">
                                            <div>
                                                <v-progress-circular
                                                    :rotate="270"
                                                    :size="50"
                                                    :width="5"
                                                    :value="100"
                                                    
                                                    color="green"
                                                    >
                                                    {{ 100}}%
                                                </v-progress-circular>
                                            </div>
                                            <div class="ml-3 mt-3">
                                                <p>200 000 FCFA au moins en Fevrier</p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        
                    </div>

              </div>
                  <bulletin/>

          </div>
      </div>
        <div v-if="PayeModal ==true" id="modal-window" class="d-flex justify-center align-center ">
      
            <div class="modals white ">
                <div class="d-flex justify-end">
                    <a href="" @click.prevent="PayeModal = false" class=" text-h4 mr-4 mt-1 cursor-pointer" >X</a>
                </div>
                <div class="px-3 px-md-12 py-3 py-md-8">
                    <div>
                        <h3>Il vous restes 40 000 FCFA a paye</h3>
                    </div>
                   
                    <form action="">
                        <div class="mt-3">
                        <v-text-field
                            v-model="firstname"
                            :rules="nameRules"
                            :counter="10"
                            label="Montants"
                            required
                        ></v-text-field>
                    </div>
                    <div>
                        <p>Payer avec : <button type="submit" class="ml-3 yellow--text mr-3">MTN momo</button> <button type="submit" class="primaire mr-3">Visa</button></p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
                
  </div>
</template>

<script>
import Bulletin from '../../components/student/Bulletin.vue'
import navbar from '../../components/student/NavBar'



import sidebar from '../../components/student/SideBar'



export default {
     components : {
        navbar,
        sidebar,
        Bulletin,

    },
    methods:{
        circleEffect(time){
            let i= time 
            time =0
            let effect =setInterval(() => {
                
                time ++

                if(i == time){
                    clearInterval(effect)
                }
            }, 400);

        }

    },
    data(){
        return {
            vald :90,
            PayeModal:false
        }
    }

}
</script>

<style>

</style>