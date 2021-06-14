<template>
  <div>
    <div id="admission" class="small-page">
      <div class="barners d-flex align-center">
        <div class="ml-md-12 px-5">
          <div>
            <h1 class="white--text text-h3 mb-3">Send your application</h1>
            <p class="white--text mb-5">And get your Admission letter</p>

            <!-- <router-link to="" class="bold red px-5 white--text py-2 rounded">Send your Admission letter now</router-link> -->
          </div>
        </div>
      </div>

      <div class="px-md-12 py-5 px-5">
        <h3 class="primaire mb-3 text-h4">ADMISSIONS</h3>
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <p class="text-justify">
                Whether you are exploring undergraduate or graduate or tuition or ready to
                start your future at Afriford University, we are here for you. We want you
                to be successful, so please explore the resources below to find your path
                or place at Afriford.
              </p>
              <div>
                <h3 class="mb-3 text-h6">I- Undergraduate Programs</h3>
                <p class="text-justify">
                  To gain Admission into any Undergrauate Course in Afriford University,
                  you should have O-level results of 5 credits in the relevant subject;
                  WAEC, NECO, or GCE
                </p>
              </div>
              <div>
                <h3 class="mb-3 text-h6">II- Direct Entry</h3>
                <p class="text-justify">
                  For Direct Entry into Year two, British A level (Check British Council)
                  is acceptable. IJMB, NCE, OND from Nigeria or its equivalent from other
                  countries and transcript from other institution in relevant areas are
                  also considered.
                </p>
                <p class="text-justify">
                  With NCE and OND special consideration are made to determine the number
                  of years you spend in Afriford. Depending on your course you may spend
                  two or three Academic years. For HND your duration is determined by your
                  class of degree and course of study. Institutions considered for Direct
                  Entry or other categories of Admission are:
                </p>
                <ul>
                  <li class="text-justify">Schools of Health Technology</li>
                  <li class="text-justify">Computer Institutes</li>
                  <li class="text-justify">National Innovative Diplomas</li>
                  <li class="text-justify">University Diploma</li>
                </ul>
                <p class="text-justify mt-3">
                  Candidates from these institutes are given Admission after the
                  Transcript Evaluation Committee evaluates the transcript or
                  qualification to determine if they meet up the minimum Requirement for
                  your chosen course of study.
                </p>
                <p class="text-justify">
                  Afriford Programs are delivered in four categories:
                </p>
                <ul class="mb-5">
                  <li class="text-justify">Full time</li>
                  <li class="text-justify">Part time</li>
                  <li class="text-justify">Open and Distance Learning</li>
                  <li class="text-justify">Online Program</li>
                </ul>
              </div>

              <div>
                <h3 class="mb-3 text-h6">III- Full Time Programs</h3>
                <p class="text-justify">
                  The fulltime programs are undertaking at the campus in Benin Republic.
                  Once you take Full time program you are expected to be in the Main
                  Campus.
                </p>
              </div>
              <div>
                <h3 class="mb-3 text-h6">IV- Part-Time Degree</h3>
                <p class="text-justify">
                  Afriford University part-time courses are available at the main campus
                  and other designated centres across the globe. For the working class who
                  has spare-time on weekend or during holidays, the Part-time program is
                  well designed for you.
                </p>
              </div>
              <div>
                <h3 class="mb-3 text-h6">V- Open & Distance Learning</h3>
                <p class="text-justify">
                  The Open and Distance Learning reaches those far away from the Campus.
                  With the Open Learning you can be reached in Remote places. You do not
                  need to attend class in other to obtain your certificates as long as you
                  can read. Register with Afriford Open and Distance Learning Department
                  and have your study materials delivered to your doorsteps. Study at your
                  own pace.
                </p>
              </div>
              <div>
                <h3 class="mb-3 text-h6">VI- Online Programs</h3>
                <p class="text-justify">
                  The Online degrees and certificates Programs are available to you if you
                  have full internet access and want to study from home. Online Programs
                  allow you to learn a subject in depth, have the flexibility to fit your
                  studies around your working life, enjoy top class teaching and benefit
                  from the convenience that comes with studying online. Studying from
                  Anywhere – Reach your goals at your pace from anywhere.
                </p>
              </div>
              <div>
                <h3 class="mb-3 text-h6">VII- Graduate Programs</h3>
                <p class="text-justify">
                  For Admission into any of our Master programs, a minimum of 2nd Class
                  Lower Division in the relevant course is required. A Third Class with
                  minimum of two years working experience in the relevant field or a Pass
                  with minimum of 5 years working experience in the relevant field will be
                  accepted.
                </p>
              </div>
            </div>

            <div>
              <router-link
                to="/admission-form"
                class="white--text bg-primaire px-3 py-1 rounded"
                >Apply now</router-link
              >
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <img
              src="../../assets/stock/design/admissionLetter.jpg"
              class="rounded"
              alt=""
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["sendAdmisionForm"]),
  },
};
</script>

<style>
#admission.small-page .barners {
  background-image: url(../../assets/stock/design/studentaccountsban.jpg);
}
.small-page .barners {
  background: center center;
  height: 30vh;
  width: 100%;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}

.small-page .barners::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.479);
}

.small-page .barners * {
  z-index: 3;
}

.small-page .barners p {
  letter-spacing: 0.3rem;
}
.small-page .barners a {
  letter-spacing: 0.2rem;
}
</style>
