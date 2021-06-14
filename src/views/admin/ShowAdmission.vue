<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main white" v-if="admissionApplicationGetters.surname">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div class="d-flex justify-space-between mt-5 mb-12">
            <h3 class="text-h5">
              Dashbord /
              <span class="primaire"
                >applications for admission of
                {{ admissionApplicationGetters.surname }}</span
              >
            </h3>
            <div>
              <span
                v-if="admissionApplicationGetters.accepted == true"
                @click.prevent=""
                class="px-3 py-1 green rounded white--text"
                >Accepted</span
              >

              <div v-else>
                <v-progress-circular
                  v-if="loading == true"
                  :size="50"
                  :width="7"
                  color="red"
                  indeterminate
                ></v-progress-circular>
                <div v-else class="px-3 py-1">
                  <div>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          color="red"
                          class="text-h4"
                          @click="DialogApplication = true"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Delete this application</span>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- <h3>Application for admission to Afriford University</h3> -->
            <div class="white px-1">
              <v-row>
                <v-col cols="6" md="3" class="d-flex align-center justify-center avatar">
                  <div class="">
                    <!-- <v-img
                                        src="../../assets/stock/student/student (3).jpg"
                                        class="rounded"
                                        height="20rem"

                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular
                                                    indeterminate
                                                    color="grey lighten-5"
                                                    ></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img> -->
                    <v-icon color="black" class="avatar-svg">mdi-account-tie</v-icon>
                  </div>
                </v-col>
                <v-col cols="12" md="3">
                  <p class="mb-2 text-justify">
                    <span class="bold">Surname :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.surname }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Othernames :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.othernames }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Date Of birth :</span>
                    <span class="ml-1">{{
                      dateManagement(admissionApplicationGetters.birthdayDate)
                    }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Place of birth :</span>
                    <span class="ml-1">{{
                      admissionApplicationGetters.birthdayPlace
                    }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Nationality :</span>
                    <span class="ml-1">{{
                      admissionApplicationGetters.nationality
                    }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">City :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.city }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">State :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.state }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Home phone number :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.phone }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Home address :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.address }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Email :</span>
                    <span class="ml-1">{{ admissionApplicationGetters.email }}</span>
                  </p>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="mb-2 text-justify">
                    <span class="bold">Id Card Or Passport Number:</span>
                    <span class="ml-1">{{ admissionApplicationGetters.idCard }}</span>
                  </p>
                  <p class="mb-2 text-justify">
                    <span class="bold">Knowledge of foreign languages : </span>
                    <span
                      class="ml-1"
                      v-for="lang in admissionApplicationGetters.languages"
                      :key="lang"
                    >
                      {{ lang }}
                    </span>
                  </p>

                  <div class="mt-4">
                    <p class="bold primaire mb-2">Course of study</p>
                    <p class="mb-1">
                      <span class="ml-5 bold">1st Choice:</span>
                      {{ getDepartmentName(admissionApplicationGetters.courseChoice1) }}
                    </p>
                    <p class="mb-1">
                      <span class="ml-5 bold">2st Choice:</span>
                      {{ getDepartmentName(admissionApplicationGetters.courseChoice2) }}
                    </p>
                  </div>
                  <div class="mt-3">
                    <p class="bold red--text mb-1">Type of admission applied for :</p>
                    <div class="d-flex">
                      <v-checkbox
                        :input-value="
                          isCheck('DIPLOMA', admissionApplicationGetters.admissionType)
                        "
                        label="Diploma"
                        color="red"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck(
                            'UNDERGRADUATE',
                            admissionApplicationGetters.admissionType
                          )
                        "
                        label="Undergraduate"
                        color="orange"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck(
                            'POST GRADUATE',
                            admissionApplicationGetters.admissionType
                          )
                        "
                        label="Post graduate"
                        color="red"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                    </div>
                  </div>
                  <div class="mt-4">
                    <p class="bold secondaire mb-1">Mode of study :</p>
                    <div class="d-flex">
                      <v-checkbox
                        :input-value="
                          isCheck('FULL TIME', admissionApplicationGetters.studyMode)
                        "
                        label="Full time"
                        color="red "
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck('PART TIME', admissionApplicationGetters.studyMode)
                        "
                        label="Part time"
                        color="orange"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck(
                            'OPEN AND DISTANCE LEARNING',
                            admissionApplicationGetters.studyMode
                          )
                        "
                        label="Open and distance learning"
                        color="green"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                      <v-checkbox
                        :input-value="
                          isCheck('ONLINE', admissionApplicationGetters.studyMode)
                        "
                        label="online"
                        color="indigo"
                        class="mr-4 mt-0"
                        disabled
                      ></v-checkbox>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <div class="mt-5">
                <!-- <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left"></th>
                        <th class="text-left">Name of school</th>
                        <th class="text-left">From</th>
                        <th class="text-left">To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table> -->
              </div>
            </div>
            <div class="my-8">
              <p class="text-h4 mb-7 border-b">Attachment documents</p>
              <div v-if="admissionApplicationGetters.documents.length > 0">
                <div
                  v-for="(document, i) in admissionApplicationGetters.documents"
                  :key="i"
                  class="my-3 d-flex justify-space-between"
                >
                  <a :href="document" target="_BLANK" class="blue--text text-h5">
                    <v-icon color="blue" class="mr-2 text-h5"
                      >mdi-file-document-outline</v-icon
                    >
                    <span>Document number {{ i + 1 }}</span>
                  </a>
                  <div class="d-flex">
                    <a :href="document" target="_BLANK">
                      <v-icon class="mx-3" color="blue">mdi-eye</v-icon>
                    </a>
                    <span>
                      <v-icon @click="download(document)" class="mx-3" color="orange"
                        >mdi-download</v-icon
                      >
                    </span>
                    <span>
                      <v-icon class="mx-3" color="red" @click="deleteDocument(document)"
                        >mdi-delete</v-icon
                      >
                    </span>
                  </div>
                </div>
              </div>
              <div v-else>
                <span class="red--text">No document attach for this application</span>
              </div>
            </div>

            <div class="px-1" v-if="admissionApplicationGetters.accepted != true">
              <h3>
                Create and send admission letter to
                {{ admissionApplicationGetters.surname }}
              </h3>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col class="d-flex" cols="12" md="6">
                    <v-select
                      :rules="departmentRules"
                      v-model="department"
                      @click="getDepartmentList()"
                      :items="departments"
                      label="Course choice"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      :rules="schoolReturnedRules"
                      v-model="returned"
                      :items="schoolReturned"
                      label="School returned"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <div class="">
                      <v-btn
                        :disabled="!valid"
                        @click="acceptedApplication"
                        class="bg-primaire white--text px-8"
                        >Create now</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </div>
            <div class="my-12 d-flex justify-space-between" v-else>
              <div>
                <p class="text-h3">Admission Pdf</p>
                <div>
                  <a :href="admissionApplicationGetters.letterPath" target="_BLANK">
                    <v-icon class="mx-3" color="blue">mdi-eye</v-icon>
                    <span>Show in browser</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="dash-main white">
        <div class="text-center my-12">
          <p class="text-h3">Sorry ! Can not get this application</p>
          <p class="text-h5">Make sure you are not delete this application</p>
        </div>
      </div>
    </div>
    <!-- Delete document -->
    <v-slide-y-transition>
      <div
        v-if="Dialog == true"
        id="modal-window"
        class="d-flex justify-center align-center"
      >
        <v-card class="modal-alert">
          <v-card-title class="headline red white--text">
            Are you sure to delete this document ?
          </v-card-title>

          <v-card-text class="black--text my-3">
            You can no longer recover this file after deleting it !
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="bg-secondaire white--text" text @click="CancelDelete()">
              Cancel
            </v-btn>
            <v-btn
              class="red white--text"
              text
              @click="confirmeDeleteDocument(documentItem)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-slide-y-transition>

    <!-- Delete application-->
    <v-slide-y-transition>
      <div
        v-if="DialogApplication == true"
        id="modal-window"
        class="d-flex justify-center align-center"
      >
        <v-card class="modal-alert">
          <v-card-title class="headline red white--text">
            Are you sure to delete this application ?
          </v-card-title>

          <v-card-text class="black--text my-3">
            Every document about this application will be deleted too !
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="bg-secondaire white--text" text @click="CancelDelete()">
              Cancel
            </v-btn>
            <v-btn class="red white--text" text @click="confirmeDeleteApplication()">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-slide-y-transition>
    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
    ...mapGetters(["admissionApplicationGetters", "DepartmentsState"]),
  },
  methods: {
    ...mapActions([
      "getAdmissionApplication",
      "acceptAdmissionApplication",
      "getDepartments",
      "download",
      "deleteAdmissionDocument",
      "deleteAdmission",
    ]),
    getDepartmentList() {
      const choice1 = this.getDepartmentName(
        this.admissionApplicationGetters.courseChoice1
      );
      const choice2 = this.getDepartmentName(
        this.admissionApplicationGetters.courseChoice2
      );
      this.departments.push(choice1);
      this.departments.push(choice2);
    },
    getDepartmentName(id) {
      if (this.DepartmentsState) {
        for (let i = 0; i < this.DepartmentsState.length; i++) {
          const department = this.DepartmentsState;
          if (department[i]._id == id) {
            return department[i].name;
          }
        }
      }
    },
    getDepartmentId(name) {
      if (this.DepartmentsState) {
        for (let i = 0; i < this.DepartmentsState.length; i++) {
          const department = this.DepartmentsState;
          if (department[i].name == name) {
            return department[i]._id;
          }
        }
      }
    },
    isCheck(val1, val2) {
      if (val2) {
        val2 = val2.trim();
      }
      if (val1 == val2) return true;
      return false;
    },

    load() {
      this.loading = true;
      this.overlay = true;
    },
    initializeAnime() {
      this.Dialog = false;
      this.loading = false;
      this.overlay = false;
    },
    accept() {
      this.department = this.getDepartmentId(this.department);
      const form = {
        id: this.$route.params.id,
        data: {
          department: this.department,
          school_returned: this.returned,
        },
      };
      this.acceptAdmissionApplication(form).then(
        () => {
          this.message = "Application accepted succesfully";
          this.snackbar = true;
          this.initializeAnime();
        },
        (error) => {
          this.message = "Failed to accept this application";
          this.snackbar = true;
          this.initializeAnime();
          console.log(error);
        }
      );

      this.getAdmissionApplication(this.$route.params.id);
    },
    dateManagement(dateObj) {
      var created_date = new Date(dateObj);

      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = created_date.getFullYear();
      var month = months[created_date.getMonth()];
      var date = created_date.getDate();

      return date + " " + month + " " + year; // final date with time, you can use this according your requirement
    },

    acceptedApplication() {
      if (this.$refs.form.validate()) {
        this.accept();
      }
    },
    CancelDelete() {
      this.Dialog = false;
      this.DialogApplication = false;
      this.documentItem = null;
    },
    deleteDocument(doc) {
      this.Dialog = true;
      this.documentItem = doc;
    },
    confirmeDeleteDocument(doc) {
      const document = {
        url: doc,
        id: this.$route.params.id,
      };
      this.load();
      this.Dialog = false;
      this.deleteAdmissionDocument(document).then(
        () => {
          this.message = "Document deleted succesfully";
          this.snackbar = true;
          this.initializeAnime();
          this.getAdmissionApplication(this.$route.params.id);
        },
        (error) => {
          this.message = "Failed to delete this document";
          this.snackbar = true;
          this.initializeAnime();
          console.log(error);
        }
      );
    },
    confirmeDeleteApplication() {
      this.DialogApplication = false;
      this.load();
      this.deleteAdmission(this.$route.params.id).then(
        () => {
          this.message = "Application deleted successfully";
          this.snackbar = true;
          this.initializeAnime();
          setTimeout(() => {
            this.$router.push("/admin/admission-applications");
          }, 1000);
        },
        (error) => {
          this.message = "Failed to delete this application";
          this.snackbar = true;
          this.initializeAnime();
          console.log(error);
        }
      );
    },
  },
  mounted() {
    this.getAdmissionApplication(this.$route.params.id);
    this.getDepartments();
  },
  data() {
    return {
      Dialog: false,
      DialogApplication: false,
      overlay: false,
      documentItem: null,
      snackbar: false,
      message: "",
      loading: false,
      departments: [],
      department: "",
      schoolReturned: ["0921", "0121"],
      returned: "",
      valid: true,
      departmentRules: [(v) => !!v || "department  is required"],
      schoolReturnedRules: [(v) => !!v || "school returned  is required"],
    };
  },
};
</script>

<style scope>
.avatar-svg {
  font-size: 20rem !important;
}
</style>
