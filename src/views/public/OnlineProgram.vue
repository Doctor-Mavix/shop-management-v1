<template>
  <div class="white">
    <navbar />
    <div id="online-program" class="small-page">
      <div class="barners d-flex align-center">
        <div class="ml-md-12 px-5">
          <div>
            <h3 class="white--text text-h3 mb-3">Online Programs</h3>
            <p class="white--text mb-5">of Afriford University</p>

            <!-- <router-link to="" class="bold red px-5 white--text py-2 rounded">Send your Admission letter now</router-link> -->
          </div>
        </div>
      </div>

      <v-container class="mb-5 mt-1">
        <v-row>
          <v-col cols="12" md="8" class="white">
            <div class="text-justify">
              <h3>Online Programs</h3>
              <p>
                The online degrees and certificates Programs are available to you if you
                have full internet access and want to study from home. Online Programs
                allow you to learn a subject in depth, have the flexibility to fit your
                studies around your working life, enjoy top class teaching and benefit
                from the convenience that comes with studying online. Studying from
                Anywhere – Reach your goals at your pace from anywhere. The courses
                available for Open and Distance Learning can also be studied online.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col
            offset-lg="6"
            offset-md="4"
            cols="12"
            class="border-primaire rounded white"
            md="8"
            lg="6"
          >
            <div class="text-justify">
              <h3 class="primaire">Open & Distance Learning</h3>
              <p>
                The Open and Distance Learning reaches those far away from the Campus.
                With the Open Learning you can be reached in Remote places. You do not
                need to attend class to obtain your certificates as long as you can read.
                Register with Afriford Open and Distance Learning Department and have your
                study materials delivered to your doorsteps. Study at your own pace.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-3">
          <v-col cols="12" class="white elevation-1 rounded" md="8">
            <div class="text-justify">
              <h3>Courses Available for Open and Distance Learning:</h3>
              <p>
                We run only some courses in Open and Distance Learning. The following are
                the courses which you can successfully study from anywhere around the
                globe without coming to our Campus. After Admission and payment of your
                fees, the materials will be delivered to you.
              </p>
              <ul>
                <li>Nursing Science</li>
                <li>Community Health</li>
                <li>Computer Science</li>
                <li>Law</li>
                <li>Hotel and Catering</li>
                <li>Entrepreneurial and Business Management</li>
                <li>Economics</li>
                <li>Accounting</li>
                <li>Mass Communication</li>
                <li>Peace keeping and Conflict Resolution</li>
                <li>Internation Relation/Political Science</li>
                <li>Education (Chemistry, Physics, Biology, Mathematics and English)</li>
                <li>Education-Early Childhood</li>
              </ul>
            </div>
          </v-col>
        </v-row>
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
#online-program.small-page .barners {
  background-image: url(../../assets/stock/design/studentaccountsban.jpg);
}
#online-program {
  background: url(../../assets/stock/design/afriford-house2.jpg) center center no-repeat;
  background-position: cover;
  /* background-attachment: fixed; */
}
</style>
