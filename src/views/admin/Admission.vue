<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div>
            <div class="d-flex justify-space-between mt-5 mb-12">
              <h3 class="text-h5">
                Dashbord /
                <span class="primaire">List of applications for admission</span>
              </h3>
              <div>
                <a
                  href=""
                  @click.prevent="Refresh()"
                  class="px-3 py-1 mr-3 green rounded white--text"
                  >Refrech</a
                >
              </div>
            </div>

            <v-card>
              <v-card-title>
                Admission Application
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="admissionApplicationsGetters"
                :search="search"
              >
                <template v-slot:item.courseChoice1="{ item }">
                  {{ getDepartmentName(item.courseChoice1) }}
                </template>
                <template v-slot:item.courseChoice2="{ item }">
                  {{ getDepartmentName(item.courseChoice2) }}
                </template>
                <template v-slot:item.accepted="{ item }">
                  <router-link :to="'/admin/admission-applications/' + item._id">
                    <span v-if="item.accepted"
                      ><v-icon class="primaire">mdi-arrow-right</v-icon></span
                    >
                    <span v-else><v-icon class="red--text">mdi-arrow-right</v-icon></span>
                  </router-link>
                </template>
              </v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    </div>

    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
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
    ...mapGetters(["admissionApplicationsGetters", "DepartmentsState"]),
  },
  methods: {
    ...mapActions(["getAdmissionApplications", "getDepartments"]),
    Refresh() {
      this.getAdmissionApplications();
      this.message = "Departments refresh successfully";
      this.snackbar = true;
    },
    getDepartmentName(id) {
      for (let i = 0; i < this.DepartmentsState.length; i++) {
        const department = this.DepartmentsState;
        if (department[i]._id == id) {
          return department[i].name;
        }
      }
    },
  },
  created() {
    // this.getAdmissionApplications();
    this.$store.dispatch("getAdmissionApplications");
    this.getDepartments();
  },
  data() {
    return {
      snackbar: false,
      message: "",
      search: "",
      headers: [
        {
          text: "Surname",
          align: "start",
          value: "surname",
        },
        {
          text: "Other names",
          align: "start",
          value: "othernames",
        },
        { text: "email", value: "email" },
        { text: "1st choice", value: "courseChoice1" },
        { text: "2st choice", value: "courseChoice2" },
        { text: "Status", value: "accepted" },
      ],
    };
  },
};
</script>

<style></style>
