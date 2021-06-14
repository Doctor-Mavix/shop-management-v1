<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main white" id="admin-profil">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div>
            <div class="head px-md-6">
              <div class="">
                <h3 class="text-h5">Dashbord / <span class="primaire">Profil</span></h3>
              </div>
              <div class="infos">
                <v-row>
                  <v-col cols="12" md="4">
                    <div class="profil-img">
                      <img
                        :src="AdminProfilState.profilPicture"
                        class="rounded mr"
                        alt=""
                      />
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <div class="mt-5 ml-3">
                      <div>
                        <h3 class="black--text mb-3">
                          <span class="primaire lighter">{{
                            AdminProfilState.grade
                          }}</span>
                          {{
                            AdminProfilState.firstname + " " + AdminProfilState.lastname
                          }}
                        </h3>
                        <p class="black--text">
                          <v-icon color="black" class="mr-">mdi-gmail</v-icon>
                          {{ AdminProfilState.email }}
                        </p>
                        <p class="black--text">
                          <span class="bold">Function :</span>
                          {{ AdminProfilState.function }}
                        </p>
                      </div>
                      <div class="d-flex justify-space-between white-part">
                        <div class="mt-3">
                          <div>
                            <span class="green mx-2 rounded-circle py-1 px-3"></span>
                            <span class="yellow mx-2 rounded-circle py-1 px-3"></span>
                            <span class="red rounded-circle mx-2 py-1 px-3"></span>
                            <span
                              class="bg-primaire rounded-circle mx-2 py-1 px-3"
                            ></span>
                          </div>
                          <div class="mt-7">
                            <a
                              href=""
                              @click.prevent="Modal = true"
                              class="bg-primaire white--text px-3 py-1 rounded"
                              >Edit</a
                            >
                          </div>
                          <!-- <span class=""><v-icon class="red--text">mdi-gmail</v-icon> </span> -->
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="Modal == true"
      id="modal-window"
      class="d-flex justify-center align-center"
    >
      <div class="modals white">
        <div class="d-flex justify-end">
          <a
            href=""
            @click.prevent="Modal = false"
            class="text-h4 mr-4 mt-1 cursor-pointer"
            >X</a
          >
        </div>
        <div class="px-3 px-md-12 py-3 py-md-8">
          <div>
            <h3>Edit profil</h3>
          </div>

          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="px-10 py-12 white rounded ml-sm-10"
          >
            <h1>Universite</h1>
            <p>Admin connection</p>
            <div v-if="errors">
              <p class="red--text">{{ errors }}</p>
            </div>
            <div class="d-flex justify-space-between">
              <v-text-field :rules="emailRules" label="Email" required></v-text-field>

              <span class="ml-8"></span>
            </div>

            <div class="d-flex justify-space-between mb-10">
              <v-text-field label="Mots de passe" required></v-text-field>
            </div>

            <div class="text-center">
              <v-progress-linear
                v-if="loading == true"
                color="green"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>

              <v-btn
                v-else
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                width="100%"
              >
                Connexion
              </v-btn>
            </div>

            <div class="mt-5 text-center">
              <router-link to="/forget-password">Forget password</router-link>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/admin/NavBar";

import sidebar from "../../components/admin/SideBar";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    navbar,
    sidebar,
  },
  computed: {
    ...mapGetters(["admissionApplicationsGetters"]),
    ...mapGetters(["AdminProfilState"]),
  },
  methods: {
    ...mapActions(["getAdmissionApplications"]),
  },
  mounted() {},
  data() {
    return {
      Modal: false,
    };
  },
};
</script>

<style>
#admin-profil .profil-img img {
  height: 20rem !important;
}
</style>
