<template>
 
      <div class="white sidenave px-3" >
            <div id="profil" class="  py-2">
            <!-- Head ,avatar ... -->
            <div class="d-flex justify-center align-center">
                <div class="avatar">
                    <img src="../assets/stock/profil/profil (2).jpg" class="rounded-circle" alt="">

                    <div class=" d-flex justify-center align-center">
                        <div>
                            <h1>John Alden</h1>
                            <p>Partenaire d affiliation</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Controle du profil -->

            <div>
                <div class="mt-3 px-3 py-3 border-t border">
                    <a href="" @click.prevent="setSide('profil information')" class="black--text">Information personnels</a>
                </div>
                <div class=" px-3 py-3 border-t border">
                    <a href="" @click.prevent="setSide('bilan achat')" class="black--text">Achats</a>
                </div>
                <div class=" px-3 py-3 border-t border">
                    <a href="" @click.prevent="setSide('vos annonces')" class="black--text">Annonces</a>
                </div>
                <div class=" px-3 py-3 border-t border">
                    <router-link to="/favorite" class="black--text">Favorites</router-link>
                </div>
                
                <div class=" px-3 py-3 border-t border">
                    <a href="" class="black--text">Programme d'affiliation</a>
                </div>
                <div class=" px-3 py-3 border-t border">
                    <a href="" class="black--text">Devenir un vendeur</a>
                </div>
                
            </div>
            </div>
        </div>
  
</template>

<script>
import {mapActions} from 'vuex'

export default {
    methods :{
        ...mapActions(['activeSide']),
        setSide(side){
            this.$router.push('/profil')
            this.activeSide(side)
        }
    }

}
</script>

<style>

</style>