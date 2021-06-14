<template>
    <div>
            <div>
                <div class="search  mb-5">
                    <form action="" class="rounded py-2 px-1 mb-5 mt-2">
                        <input type="search" name="search_article" id="search_articles" placeholder="Rechercher un articles">
                        <button type="submit"><v-icon>mdi-magnify</v-icon></button>
                    </form>
                </div>
                <!-- Publiciter -->
                <div class="bg-tkp mb-5 pub-back-1 publicite d-flex justify-center align-center">
                    <div>
                        <h3 class="white--text mb-1">Fullstack Vue js Node js developper</h3>
                        <router-link to="" class="bg-secondaire white--text px-3 py-1">Consulter l'offre</router-link>
                    </div>
                </div>
                <h3>Trier par :</h3>
                <div class="trie">
                    <v-list-group
                    :value="false"
                    no-action
                    sub-group
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>Categorie</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in categorie"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                        <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group>

                    <div class="py-4 px-10 link ">
                        <router-link to="/" class="">Les articles les plus rescents <v-icon>mdi-arrow-right</v-icon></router-link>
                    </div>
                    <div class="py-4 px-10 link ">
                        <router-link to="/" class="">Les articles les plus populaires<v-icon>mdi-arrow-right</v-icon></router-link>
                    </div>
                </div>

                <!-- Sponsor (articles sponsorise)  -->

                <h3 class="mt-3">Les articles qui peuvent vous interresse</h3>
                <div class="mini-article">
                   <router-link v-for="item in 3" :key="item" to="">
                        <v-row  class="my-2">
                            <v-col cols="12" md="4" class="">
                                <img src="@/assets/stock/categories/1.jpg"  alt="">
                            </v-col>
                            <v-col cols="12" md="8">
                                <p class="bold black--text mb-0">Suis le titre de l article interressant genre sponsorise</p>
                                <p class="black--text">16 Mars 2020</p>                        
                            </v-col>
                            
                        </v-row>
                   </router-link>
                </div>

                <!-- Offre  product -->
                <h3>Offre du jours</h3>
                <div class="mini-article">
                   <router-link v-for="item in 3" :key="item" to="">
                        <v-row  class="my-2 border-grey rounded">
                            <v-col cols="12" md="4" class="">
                                <img src="@/assets/stock/categories/2.jpg"  alt="">
                            </v-col>
                            <v-col cols="12" md="8">
                                <p class="bold black--text mb-0">Le nom du produit</p>
                                
                                <div class="d-flex">
                                    <v-rating
                                    :value="4.3"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="23"
                                    ></v-rating>

                                    <span class="primaire ml-4">
                                    {{399}}
                                    </span>
                                </div>
                                <div class="d-flex justify-space-between">
                                    <p class="secondaire">10$</p>
                                </div>                        
                            </v-col>
                            
                        </v-row>
                   </router-link>
                </div>
                 <!-- Publiciter -->
                <div class="bg-tkp my-5 publicite pub-back-2 d-flex justify-center align-center">
                    <div>
                        <h3 class="white--text mb-1">Fullstack Vue js Node js developper</h3>
                        <router-link to="" class="red white--text px-3 py-1">Consulter l'offre</router-link>
                    </div>
                </div>
               <!-- Promo product -->
                <h3>Promotion</h3>
                <div class="mini-article">
                   <router-link v-for="item in 3" :key="item" to="">
                        <v-row  class="my-2 border-grey rounded">
                            <v-col cols="12" md="4" class="">
                                <img src="@/assets/stock/categories/2.jpg"  alt="">
                            </v-col>
                            <v-col cols="12" md="8">
                                <p class="bold black--text mb-0">Le nom du produit</p>
                                
                                <div class="d-flex">
                                    <v-rating
                                    :value="4.3"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="23"
                                    ></v-rating>

                                    <span class="primaire ml-4">
                                    {{399}}
                                    </span>
                                </div>
                                <div class="d-flex justify-space-between">
                                    <p class="black--text text-h5">10$</p>
                                </div>
                                <p class="black--text"><s>15.00$</s> <span class="ml-1 bg-secondaire px-1 py-1 white--text rounded">- 20% </span></p>

                            </v-col>
                            
                        </v-row>
                   </router-link>
                </div>

            </div>


    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>