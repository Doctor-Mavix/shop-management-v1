<template>
  <div id="barners">
    <div class="barners">
      <v-card color="" class="bg-dash" dark flat tile>
        <!-- <img src="../../assets/stock/design/back-student-studying.jpg" alt="" /> -->
        <v-window v-model="onboarding" class="window">
          <v-window-item v-for="item in barners" :key="`card-${item.url}`">
            <div class="carrousel">
              <div class="carrousel-img">
                <img :src="item.url" alt="" />
              </div>
              <div class="carrousel-text px-sm-5 px-md-12">
                <h3 class="white--text text-h4">{{ item.first }}</h3>
                <h1 class="white--text text-h1 mb-3">{{ item.main }}</h1>
                <p class="white--text mb-5 second">
                  {{ item.second }}
                </p>

                <router-link
                  to="/admission-form"
                  class="bold bg-primaire px-sm-5 px-2 ml-1 white--text py-2 rounded"
                  >Send your Admission letter now</router-link
                >
              </div>
            </div>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-btn text @click="prev" class="primaire">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item
              v-for="item in barners"
              :key="`btn-${item.url}`"
              v-slot="{ active, toggle }"
            >
              <v-btn class="primaire" :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn class="primaire" text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <v-container class="my-5" id="quality">
      <v-row>
        <v-col cols="12" md="3">
          <div class="quality">
            <div class="d-flex justify-center align-center">
              <span class="orange px-6 py-6 rounded-circle">
                <v-icon class="testiaire text-h3">mdi-bookshelf</v-icon>
              </span>
            </div>
            <div class="px-3 py-12 border-secondaire-bold description rounded">
              <h3 class="testiaiare text-center mt-6">Books & Liberary</h3>
              <p class="testiaire text-center mb-8">
                We have a quality e-library for learning and for research .
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="quality">
            <div class="d-flex justify-center align-center">
              <span class="px-6 py-6 red rounded-circle">
                <v-icon class="testiaire text-h3">mdi-teach</v-icon>
              </span>
            </div>
            <div class="px-3 py-11 border-red-bold description rounded">
              <h3 class="testiaiare text-center mt-6">Certified Teachers</h3>
              <p class="testiaire text-center">
                All teachers are highly qualified with extensive academic experiences .
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="quality">
            <div class="d-flex justify-center align-center">
              <span class="bg-primaire px-6 py-6 rounded-circle">
                <v-icon class="testiaire text-h3">mdi-certificate-outline</v-icon>
              </span>
            </div>
            <div class="border-primaire-2 px-3 py-11 description rounded">
              <h3 class="testiaiare text-center mt-6">Certification</h3>
              <p class="testiaiare text-center">
                Our certificate is very well respected in the Labour Market due the
                quality of our training .
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="quality">
            <div class="d-flex justify-center align-center">
              <span class="px-6 py-6 bg-mv-3 rounded-circle">
                <v-icon class="testiaire text-h3">mdi-speedometer</v-icon>
              </span>
            </div>
            <div class="px-3 py-2 border-bold-mv-3 description rounded">
              <h3 class="testiaiare text-center mt-12">
                Centre for Innovation and Research
              </h3>
              <p class="testiaiare text-center">
                We have overwhelming zeal for a progressive society which we continuously
                carry out by innovation and Research .
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawerState: {
      statut: true,
    },
    length: 3,
    onboarding: 0,
    barners: [
      {
        first: "Welcome to",
        main: "Afriford University",
        second: "The purpose of education is to turn mirrors into windows",
        link: "Send your Admission application now",
        url: require("@/assets/stock/design/barners1.jpeg"),
      },
      {
        first: "New",
        main: "Resumption date",
        second: "for a fresh semester is on 26th April 2021.",
        link: "Send your Admission application now",
        url: require("@/assets/stock/design/back-student-studying.jpg"),
      },
    ],
  }),

  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
    nextAuto() {
      setInterval(() => {
        this.next();
      }, 10000);
    },
  },
  mounted() {
    this.nextAuto();
  },
};
</script>
>

<style>
#barners .barners {
  /* background: url(../../assets/stock/design/back-student-studying.jpg) center center; */
  height: 70vh;
  width: 100vw;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  overflow: hidden !important;
}

#barners .barners * {
  z-index: 3;
}
#barners .barners .carrousel {
  width: 100vw !important ;
  height: 65vh;
  position: relative;
}
#barners .barners .carrousel .carrousel-img {
  width: 100% !important ;
  height: 65vh;
  position: relative;
}
#barners .barners .carrousel-img::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.479);
}
#barners .barners .carrousel img {
  width: 100% !important;
  height: 100% !important;
  z-index: 1 !important;
}
#barners .barners .carrousel .carrousel-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}
#barners .barners p {
  letter-spacing: 0.3rem;
}
#barners .barners a {
  letter-spacing: 0.2rem;
}

#barners .quality .description {
  margin-top: -3rem !important;
  z-index: 11 !important;
}

@media screen and (max-width: 500px) {
  #barners .barners .carrousel .carrousel-text .text-h1 {
    font-size: 2.5rem !important;
    font-weight: bold;
    margin-top: -1.3rem !important;
  }

  #barners .barners .carrousel .carrousel-text .text-h4 {
    margin-bottom: 0rem !important;
  }
  #barners .barners .carrousel .carrousel-text .second {
    margin-top: -1.5rem !important;
  }
  #barners .barners {
    height: 75vh;
  }
}
</style>
