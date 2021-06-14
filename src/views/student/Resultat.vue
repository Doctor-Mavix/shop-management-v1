<template>
  <div class="white">
      <navbar/>
      <div class="d-flex">
          <sidebar/>

          <div class="dash-main bg-dash">
                <div class="white mx-md-8 rounded mt-md-3 pa-3">
                    <v-row>
                        <v-col
                        cols="12"
                        md="3"
                        >
                            <div class="px-md-3">
                                <h3>Top 3 meileurs eleves de 2021</h3>
                                <div class="mt-3">
                                    <div class="d-flex mb-3">
                                         
                                        <v-avatar
                                        color="red"
                                        size="35"
                                        >
                                        <img src="../../assets/stock/student/student (3).jpg" alt="">
                                        </v-avatar>

                                        <div class="d-flex justify-center align-center">
                                            <span class="ml-2 text-h6">LEGBA Raimath</span>
                                        </div>

                                    </div>
                                    <div class="d-flex mb-3">
                                        
                                        <v-avatar
                                        color="red"
                                        size="35"
                                        >
                                        <img src="../../assets/stock/student/student1.jpg" alt="">
                                        </v-avatar>

                                        <div class="d-flex justify-center align-center">
                                            <span class="ml-2 text-h6">Aman LIKAK</span>
                                        </div>

                                    </div>
                                    <div class="d-flex mb-3">
                                        
                                        <v-avatar
                                        color="red"
                                        size="35"
                                        >
                                        <img src="../../assets/stock/student/student (2).jpg" alt="">
                                        </v-avatar>

                                        <div class="d-flex justify-center align-center">
                                            <span class="ml-2 text-h6">Shuck Reagan</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                        </v-col>
                        <v-col
                        cols="12"
                        md="3"
                        >
                           <div>
                                <h3 class="secondaire">Resumer 1er semestre</h3>
                                <p class=" mb-2 mt-1"><span class="bold">Matieres valide : </span> 5</p>
                                <p class=" mb-2 mt-1"><span class="bold">Matieres non valide : </span> 3</p>
                                <p class=" mb-2 mt-1"><span class="bold">Rank: </span> 3</p>
                           </div>
                           <div>
                                <h3 class="indigo--text">Resumer 2er semestre</h3>
                                <p>Pas encore disponible</p>
                           </div>

                            
                        </v-col>
                        <v-col
                        cols="12"
                        md="3"
                        >
                            <div>
                                <h3 class="green--text">Matiere Valide :</h3>
                                <div>
                                    <p class="bold mb-2 mt-1">1er Semestre</p>
                                    <p class="mb-0">Networking</p>
                                    <p class="mb-0">Microprocessor</p>
                                    <p class="mb-0">Microcontroller</p>
                                    <p class="mb-0">Javascript</p>
                                    <p class="mb-0">PHP & MySql</p>
                                </div>
                            </div>
                        </v-col>
                        <v-col
                        cols="12"
                        md="3"
                        >
                            <div>
                                <h3 class="red--text">Matiere Non Valide :</h3>
                                <div>
                                    <p class="bold mb-2 mt-1">1er Semestre</p>
                                    <p class="mb-0">C programming</p>
                                    <p class="mb-0">Computer Architecture</p>
                                    <p class="mb-0">Merise</p>
                                    
                                </div>
                            </div>

                        </v-col>
                    </v-row>
                </div>
                <bulletin/>

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
    data(){
        return {
          
        }
    }

}
</script>

<style>

</style>