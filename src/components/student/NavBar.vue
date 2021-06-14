<template>
  <div class=" ">
  
  
    <v-app-bar
      class="white px-md-12 "
      dense
      dark
      elevation="0"
    >
     

      <v-toolbar-title ><a class="black--text logo" href=""><v-icon color="red" class="text-h4">mdi-school</v-icon> <span class="black--text">University</span></a></v-toolbar-title>


     <v-spacer></v-spacer>   

      <!-- <router-link to="/" class="black--text px-2 bold">Home</router-link>
      <router-link to="/school-presentation" class="black--text px-2 bold">School Presentation</router-link>
      <router-link to="/" class="black--text px-2 bold">Student Project</router-link>
      <router-link to="/contact" class="black--text px-2 bold">Contact</router-link> -->
        <span class="black--text mr-3">Mardi 22 Mars 2021</span>
       <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <a 
                    href=""
                    @click.prevent=""
                    class="px-5 py-1 rounded-pill  bg-mv"
                    
                    v-bind="attrs"
                    v-on="on"
                    >
                    <div class="d-flex">
                        <v-avatar
                        color="red"
                        size="30"
                        >
                        <img src="../../assets/stock/student/student1.jpg" alt="">
                        </v-avatar>

                        <div class="d-flex justify-center align-center">
                            <span class="ml-2 red--text">Aman LIKAK</span>
                        </div>

                    </div>
                    </a>
                </template>
                <v-list>
                    <v-list-item
                    
                    >
                    <router-link to="/logout" class="black--text">Logout</router-link>
                    </v-list-item>
                </v-list>
        </v-menu>
      
      <router-link to="/" class="black--text px-2 bold">
        <v-badge
            :content="2"
            :value="2"
            color="red"
            overlap
        >
            <v-icon  color="black">
            mdi-bell-outline
            </v-icon>
        </v-badge>
      </router-link>
    
      
      
   
    </v-app-bar>


  
  </div>
</template>

<script>

import {mapGetters , mapActions} from 'vuex'


export default {
    components : {
      
    },
    computed: mapGetters(['panierState','drawerState']),

    methods : {
        ...mapActions([
          'showDrawer',
        ]),
        cancel(){
          this.navSubmitClass = false
          this.searchForm = false
        },
        submitTkp(){
            this.cancel();
        },
        
        search(){
            if(this.searchForm == true){
                this.submitTkp()
            }
            else {
                this.searchForm = true ;
                this.navSubmitClass = true
            }
        },
      
        

      

    },

    data(){
        return {
           
           
        items: [
        { title: 'Logout' },
        
      ],
        }
    }
       
}
</script>

<style>

</style>