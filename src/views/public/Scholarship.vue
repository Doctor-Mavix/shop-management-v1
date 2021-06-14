<template>
  <div class="white">
    <navbar />
    <div id="scholarship" class="small-page">
      <div class="barners d-flex align-center">
        <div class="ml-md-12 px-5">
          <div>
            <h1 class="white--text text-h3 mb-3">Scholarship</h1>
            <p class="white--text mb-5">in Afriford University</p>

            <!-- <router-link to="" class="bold red px-5 white--text py-2 rounded">Send your Admission letter now</router-link> -->
          </div>
        </div>
      </div>

      <v-container class="mb-5">
        <v-row>
          <v-col cols="12" md="8">
            <div class="text-justify">
              <h1>Scholarship</h1>
              <p>
                Scholarship is available for Students on application. As a result of
                United Nation Education for all through UNESCO, Afriford University gives
                out scholarship per year to students in different categories; Brilliant
                students with high score on a frequently conducted scholarship exam,
                students from low Education Regions and Students from lowest income
                household; farmers, teachers and petit traders.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            offset-md="4"
            offset-lg="6"
            cols="12"
            class="border-primaire rounded"
            md="8"
            lg="6"
          >
            <div class="text-justify">
              <h1 class="primaire">How to get it ?</h1>
              <p>Contact admin to more information</p>
            </div>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="12" md="8">
            <div class="text-justify">
              <h1>Follow this step</h1>
              <p>
                Scholarship is available for Students on application. As a result of
                United Nation Education for all through UNESCO, Afriford University gives
                out scholarship per year to students in different categories; Brilliant
                students with high score on a frequently conducted scholarship exam,
                students from low Education Regions and Students from lowest income
                household; farmers, teachers and petit traders.
              </p>
            </div>
          </v-col>
        </v-row> -->
      </v-container>
    </div>
    <foot />
  </div>
</template>

<script>
import navbar from "../../components/public/NavBar";

import foot from "../../components/public/Footer";

export default {
  components: {
    navbar,
    foot,
  },
};
</script>

<style>
#scholarship.small-page .barners {
  background-image: url(../../assets/stock/design/studentaccountsban.jpg);
}
</style>
