<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash">
        <div>
          <v-row class="px-md-5 mt-5">
            <v-col cols="3" class="">
              <div class="rounded linear-bg-1 px-3 py-5">
                <div class="">
                  <div class="d-flex justify-center align-center">
                    <v-icon color="white" class="text-h4">mdi-account-group</v-icon>
                  </div>
                  <div class="mt-3 text-center">
                    <span class="white--text">Students :</span>
                    <span class="bold white--text ml-3">12300</span>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="3" class="px-3">
              <div class="rounded linear-bg-2 px-3 py-5">
                <div class="">
                  <div class="d-flex justify-center align-center">
                    <v-icon color="white" class="text-h4"
                      >mdi-clipboard-list-outline</v-icon
                    >
                  </div>
                  <div class="mt-3 text-center">
                    <span class="white--text">Request for Admission :</span>
                    <span class="bold white--text ml-3">{{
                      bilanState.totalAdmissionApplication
                    }}</span>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="3" class="px-3">
              <div class="rounded linear-bg-3 px-3 py-5">
                <div class="">
                  <div class="d-flex justify-center align-center">
                    <v-icon color="white" class="text-h4">mdi-school-outline</v-icon>
                  </div>
                  <div class="mt-3 text-center">
                    <span class="white--text">Faculty :</span>
                    <span class="bold white--text ml-3">{{
                      bilanState.totalFaculty
                    }}</span>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="3" class="px-3">
              <div class="rounded linear-bg-4 px-3 py-5">
                <div class="">
                  <div class="d-flex justify-center align-center">
                    <v-icon color="white" class="text-h4"
                      >mdi-format-list-bulleted</v-icon
                    >
                  </div>
                  <div class="mt-3 text-center">
                    <span class="white--text">Department :</span>
                    <span class="bold white--text ml-3">
                      {{ bilanState.totalDepartment }}
                    </span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- <diagram-home-resume /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import DiagramHomeResume from "../../components/admin/DiagramHomeResume.vue";
import navbar from "../../components/admin/NavBar";

import sidebar from "../../components/admin/SideBar";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    navbar,
    sidebar,
    // DiagramHomeResume,
  },
  computed: {
    ...mapGetters(["bilanState"]),
  },
  methods: {
    ...mapActions(["getBilan", "logout"]),
    circleEffect(time) {
      let i = time;
      time = 0;
      let effect = setInterval(() => {
        time++;

        if (i == time) {
          clearInterval(effect);
        }
      }, 400);
    },
  },
  mounted() {
    this.getBilan().then(
      () => {
        console.log("good");
      },
      (err) => {
        // this.logout();
        console.log(err);
      }
    );
  },
  data() {
    return {
      vald: 90,
      PayeModal: false,
    };
  },
};
</script>

<style></style>
