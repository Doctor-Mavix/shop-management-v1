<template>
  <div class="white">
    <navbar />
    <div class="py-5 px-1">
      <v-container v-if="sendSuccess == true">
        <h3 class="text-h4 green--text mb-12">{{ message }}</h3>
        <div>
          <p>
            We will send you letter by your email if you are accepted in our university
          </p>
        </div>
      </v-container>
      <v-container class="" id="admission-form" v-else>
        <h3 class="text-h4 testiaire">Send your application now</h3>
        <v-form ref="form" class="form" v-model="valid" lazy-validation>
          <p class="green--text mt-4 text-h5 mb-0">Section A</p>
          <v-row>
            <v-col cols="12" md="12">
              <div class="d-sm-flex ligne">
                <span class="mr-2 mt-5">SURNAME :</span>
                <v-text-field
                  v-model="formulaire.surname"
                  :rules="usernameRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div class="d-sm-flex mt-3 mt-sm-0 ligne">
                <span class="mr-2 mt-5">OTHER NAMES :</span>

                <v-text-field
                  v-model="formulaire.othernames"
                  :rules="othernamesRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="d-sm-flex mt-3 mt-sm-0 ligne">
                <span class="mr-2 mt-5">DATE OF YOUR BIRTH :</span>

                <v-text-field
                  v-model="formulaire.birthdayDate"
                  :rules="birthdayDateRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="d-sm-flex mt-3 mt-sm-0 ligne">
                <span class="mr-2 mt-5">PLACE OF YOUR BIRTH :</span>
                <v-text-field
                  v-model="formulaire.birthdayPlace"
                  :rules="birthdayPlaceRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="d-sm-flex mt-3 mt-sm-0 ligne">
                <span class="mr-2 mt-5">NATIONALITY :</span>
                <v-text-field
                  v-model="formulaire.nationality"
                  :rules="nationalityRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">CITY :</span>
                <v-text-field
                  v-model="formulaire.city"
                  :rules="cityRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">STATE :</span>
                <v-text-field
                  v-model="formulaire.state"
                  :rules="stateRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">COUNTRY :</span>
                <v-text-field
                  v-model="formulaire.country"
                  :rules="countryRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">HOME ADDRESS :</span>
                <v-text-field
                  v-model="formulaire.address"
                  :rules="addressRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">HOME PHONE NUMBER :</span>
                <v-text-field
                  v-model="formulaire.phone"
                  :rules="phoneRules"
                  label=" "
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">EMAIL :</span>
                <v-text-field
                  v-model="formulaire.email"
                  :rules="emailRules"
                  label=" "
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">ID CARD OR PASSPORT NUMBER :</span>
                <v-text-field
                  v-model="formulaire.idCard"
                  :rules="idCardRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div
                class="d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 d-sm-flex mt-3 mt-sm-0 ligne"
              >
                <span class="mr-2 mt-5">KNOWLEDGE OF FOREIGN LANGUAGE :</span>
                <v-text-field
                  v-model="formulaire.languages"
                  label=""
                  color="green"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>

          <p class="red--text mt-4 text-h5 mb-0">Section B</p>
          <v-row align="center">
            <v-col class="d-sm-flex ligne" cols="12" md="12">
              <span class="mt-5">COURSE OF STUDY :</span>

              <v-select
                :items="departments"
                color="red darken-3"
                :rules="courseChoiceRules"
                v-model="formulaire.courseChoice1"
                label="1st choice"
                class="ml-5"
                @click="setDepartment()"
                required
              ></v-select>

              <v-select
                :items="departments"
                :rules="courseChoiceRules"
                label="2st choice"
                v-model="formulaire.courseChoice2"
                class="ml-5"
                @click="setDepartment()"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <p class="mt-5">TYPE OF ADMISSION APPLIED FOR :</p>
              <v-radio-group
                v-model="formulaire.admissionType"
                :rules="admissionTypeRules"
                required
              >
                <v-radio label="DIPLOMA" color="red" value="DIPLOMA "></v-radio>
                <v-radio
                  label="UNDERGRADUATE"
                  color="orange"
                  value="UNDERGRADUATE"
                ></v-radio>
                <v-radio
                  label="POST GRADUATE"
                  color="green"
                  value="POST GRADUATE"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" md="8">
              <div class=" " v-if="formulaire.admissionType == 'POST GRADUATE'">
                <span class="mr-2 mt-5"
                  >FOR POST GRADUATE (Course and Class of previous degree) :</span
                >
                <v-text-field
                  v-model="formulaire.previousDegre"
                  :rules="previousDegreRules"
                  label=""
                  color="green"
                  required
                ></v-text-field>
              </div>
            </v-col>

            <v-col cols="12">
              <p>MODE OF STUDY :</p>
              <v-radio-group v-model="formulaire.studyMode" :rules="studyModeRules">
                <v-radio label="FULL TIME" color="red" value="FULL TIME"></v-radio>
                <v-radio label="PART TIME" color="indigo" value="PART TIME"></v-radio>
                <v-radio
                  label="OPEN AND DISTANCE LEARNING"
                  color="green"
                  value="OPEN AND DISTANCE LEARNING"
                ></v-radio>
                <v-radio
                  label="ONLINE PROGRAMME"
                  color="orange"
                  value="ONLINE PROGRAMME"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <!-- <div>
						<p class="mt-4 secondaire text-h5 mb-0">Section C</p>
						<div>
							<div>
								<div class="pb-0 mt-1">
									<p class="bold">SCHOOLS ATTENDED WITH DATES</p>
								</div>
							</div>
							<v-row>
								<v-col cols="12" md="4">
									<div class="d-flex ligne">
										<span class="mt-5">1 -</span>

										<v-select
											:items="items"
											color="red darken-3"
											label="NAME OF SCHOOL"
											class="ml-5"
										></v-select>
									</div>
								</v-col>
								<v-col cols="12" md="4">
									<div class="">
										<v-text-field
											v-model="formulaire.firstname"
											:rules="nameRules"
											label="DATE FROM"
											color="red"
											required
										></v-text-field>
									</div>
								</v-col>
								<v-col cols="12" md="4">
									<div class="">
										<v-text-field
											v-model="formulaire.firstname"
											:rules="nameRules"
											label="DATE TO"
											color="red"
											required
										></v-text-field>
									</div>
								</v-col>
							</v-row>
							<div class="pb-0 mt-1">
								<p class="bold">ACADEMIC QUALIFICATIONS GCE / SSCE / WASC RESULTS</p>
							</div>

							<v-row>
								<v-col cols="9">
									<div class="d-flex ligne">
										<span class="mt-5">1 -</span>

										<v-select
											:items="items"
											color="red darken-3"
											label="SUBJECT"
											class="ml-5"
										></v-select>
									</div>
								</v-col>
								<v-col cols="3">
									<div class="">
										<v-select
											:items="items"
											color="red darken-3"
											label="GRADE"
											class="ml-5"
										></v-select>
									</div>
								</v-col>
							</v-row>
						</div>
					</div> -->

          <p class="text-h5">Attach Document</p>

          <v-row>
            <template>
              <v-file-input
                v-model="formulaire.files"
                color=" "
                :rules="filesRules"
                accept="image/png, image/jpeg, image/bmp"
                counter
                label="Pdf and Image"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip v-if="index < 2" color="  " dark label small>
                    {{ text }}
                  </v-chip>

                  <span
                    v-else-if="index === 2"
                    class="overline grey--text text--darken-3 mx-2"
                  >
                    +{{ formulaire.files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </template>
          </v-row>
          <div class="text-center">
            <v-progress-linear
              v-if="loading == true"
              color="green"
              indeterminate
              rounded
              height="4"
            ></v-progress-linear>
            <v-btn
              v-else
              :disabled="!valid"
              color=""
              class="bg-primaire mr-4 bold white--text"
              @click="validates"
              width="100%"
            >
              Submit
            </v-btn>
          </div>
        </v-form>

        <div class="my-12 pt-12 text-center">
          <h3 class="text-h4">Problem to send your application ?</h3>
          <p class="text-h5">Try to download this form</p>
          <a
            :href="require('@/assets/stock/document/Application.jpg')"
            download="afriford-form.pdf"
            class="green px-4 py-3 rounded-pill white--text"
            >Download</a
          >
        </div>
      </v-container>
    </div>
    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <foot />
  </div>
</template>

<script>
import navbar from "../../components/public/NavBar";

import foot from "../../components/public/Footer";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    navbar,
    foot,
  },
  computed: {
    ...mapGetters(["DepartmentsState"]),
  },
  data() {
    return {
      overlay: false,
      snackbar: false,
      message: "",
      loading: false,
      valid: true,
      sendSuccess: false,
      // form rules validations
      //required , moins que 20 mb
      filesRules: [(v) => !!v || "attachment document is required"],
      emailRules: [
        (v) => !!v || "email is required",
        (v) => /.+@.+\..+/.test(v) || "this email is not valid ",
      ],
      usernameRules: [(v) => !!v || "username is required"],
      othernamesRules: [(v) => !!v || "othernames  is required"],
      birthdayDateRules: [
        (v) => !!v || "birth date  is required",
        (v) =>
          // /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(v) ||
          /^\d{4}[/](0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])$/.test(v) ||
          "date must be in this format 1960/12/31 ",
      ],
      birthdayPlaceRules: [(v) => !!v || "birth place  is required"],
      nationalityRules: [(v) => !!v || "nationality  is required"],
      cityRules: [(v) => !!v || "city is required"],
      stateRules: [(v) => !!v || "state is required"],
      countryRules: [(v) => !!v || "state is required"],
      addressRules: [(v) => !!v || "address is required"],
      phoneRules: [(v) => !!v || "phone is required"],
      idCardRules: [(v) => !!v || "id Card or password number  is required"],
      previousDegreRules: [(v) => !!v || "previous degre  is required"],
      courseChoiceRules: [(v) => !!v || "course of study is required"],

      admissionTypeRules: [(v) => !!v || "type of admission is required"],
      studyModeRules: [(v) => !!v || "mode of study is required"],
      departments: [],
      formulaire: {
        surname: "",
        othernames: "",
        email: "",
        birthdayDate: "",
        birthdayPlace: "",
        nationality: "",
        city: "",
        state: "",
        country: "",
        address: "",
        phone: "",
        idCard: "",
        languages: "",

        courseChoice1: "",
        courseChoice2: "",
        admissionType: "",
        previousDegre: "", //only for post graduate admission type
        studyMode: "",
        files: [], //array of attachement document
      },
      // formulaire: {
      //   surname: "surname",
      //   othernames: "othernamess",
      //   email: "email@test.com",
      //   birthdayDate: "1960/12/20",
      //   birthdayPlace: "birthdayPlace",
      //   nationality: "nationality",
      //   city: "city",
      //   state: "state",
      //   country: "country",
      //   address: "address",
      //   phone: "phone",
      //   idCard: "idCard",
      //   languages: "languages",

      //   courseChoice1: "",
      //   courseChoice2: "",
      //   admissionType: "",
      //   previousDegre: "", //only for post graduate admission type
      //   studyMode: "",
      //   files: [],
      // },
    };
  },
  methods: {
    ...mapActions(["sendAdmisionForm", "getDepartments"]),
    getDepartmentId(department_name) {
      for (let i = 0; i < this.DepartmentsState.length; i++) {
        const department = this.DepartmentsState;

        if (department[i].name == department_name) {
          return department[i]._id;
        }
      }
    },
    Soumettre() {
      this.formulaire.courseChoice1 = this.getDepartmentId(this.formulaire.courseChoice1);
      this.formulaire.courseChoice2 = this.getDepartmentId(this.formulaire.courseChoice2);

      this.loading = true;
      this.overlay = true;

      this.sendAdmisionForm(this.formulaire).then(
        () => {
          this.formulaire = {};
          this.message = "Application sended successfully";
          this.overlay = false;
          this.sendSuccess = true;
          this.snackbar = true;
        },
        (error) => {
          this.message = "Failed to send application .Try later!";
          this.snackbar = true;
          this.overlay = false;
          console.log(error);
        }
      );
      this.message = "";
      this.loading = false;
    },
    validates() {
      if (this.$refs.form.validate()) {
        this.Soumettre(); //send the data by vue action to the backend
      }
    },
    setDepartment() {
      const department = [];
      this.DepartmentsState.forEach((item) => {
        department.push(item.name);
      });
      this.departments = department;
    },
    read(file) {
      console.log(file);
      return file.name;
    },
  },
  beforeMount() {
    this.getDepartments();
    this.setDepartment();
  },
};
</script>

<style>
#admission-form .form .ligne {
  margin-bottom: -2rem;
}
</style>
