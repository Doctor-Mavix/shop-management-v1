<template >
   <div>
        <v-tabs
            v-model="tab"
            align-with-title
        >
            <v-tabs-slider color="blue"></v-tabs-slider>

            <v-tab
                v-for="item in items"
                :key="item"
            >
                {{ item }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="item in items"
            :key="item"
        >
            <v-card flat>
            <v-card-text>
               <div class="px-5">
                   <h3>Heureux Noel a tous</h3>
                    <div class="fast-description">
                        <p class="bold">L'equipe tokpa </p>
                        <v-row>
                            <v-col
                                cols="12" 
                                v-for="i in 15"
                                :key="i"
                            >
                                <v-row>
                                    <v-col
                                    cols="12"
                                    sm="6"
                                    >
                                        <v-img
                                        src='@/assets/stock/categories/3.jpg'   
                                        >
                                        </v-img>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        class="text-xl-center"
                                    >
                                        <div class="py-md-5">
                                            <p class="bold">Titre de l article </p>
                                            <p class="orange--text">Recrutement</p>
                                            <router-link to="" class="orange darken-4 white--text py-1 px-2 rounded">Voir plus</router-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>

                </div>
            </v-card-text>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Article populaire ', 'Article recent', 
        ],
        text: ` <div>
                </div>
        
        `,
      }
    },
  }
</script>