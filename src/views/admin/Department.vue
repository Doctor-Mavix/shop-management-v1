<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash" id="admin-profil">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div class="d-flex justify-space-between">
            <h3 class="text-h5">Dashbord / <span class="primaire">Department</span></h3>
            <div>
              <a
                href=""
                @click.prevent="Refresh()"
                class="px-3 py-1 mr-3 green rounded-pill white--text"
                >Refrech</a
              >
              <a
                href=""
                @click.prevent="Add()"
                class="px-3 py-1 red rounded-pill white--text"
                >Add Department</a
              >
            </div>
          </div>

          <div class="mt-5">
            <v-card>
              <v-card-title>
                Departments
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table :headers="headers" :items="DepartmentsState" :search="search">
                <template v-slot:item.faculty="{ item }">
                  <td>
                    {{ getFacultyName(item.faculty) }}
                  </td>
                </template>
                <template v-slot:item.action="{ item }">
                  <td>
                    <a
                      href=""
                      @click.prevent="Edit(item)"
                      class="rounded-circle white--text px-2 py-3 mr-3"
                      ><v-icon class="primaire">mdi-circle-edit-outline</v-icon>
                    </a>
                    <a
                      href=""
                      @click.prevent="Delete(item._id)"
                      class="rounded-pill white--text px-2 py-3"
                    >
                      <v-icon color="red">mdi-trash-can-outline</v-icon>
                    </a>
                  </td>
                </template>
              </v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <v-slide-x-transition>
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
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="px-10 py-12 white rounded ml-sm-10"
            >
              <h1>{{ ModalText.title }}</h1>

              <div v-if="errors">
                <p class="red--text">{{ errors }}</p>
              </div>
              <div class="d-flex justify-space-between">
                <v-text-field
                  v-model="ModalModel.name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex justify-space-between">
                <v-text-field
                  v-model="ModalModel.acronym"
                  :rules="acronymRules"
                  label="Acronym"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex justify-space-between">
                <v-text-field
                  :rules="certificateRules"
                  label="Certificate"
                  v-model="ModalModel.certificate"
                  required
                ></v-text-field>
              </div>
              <div>
                <v-select
                  :items="facultys"
                  color="red darken-3"
                  :rules="facultyRules"
                  v-model="ModalModel.faculty"
                  label="Faculty"
                  class=""
                  @click="setFaculty()"
                  required
                ></v-select>
              </div>
              <div class="d-flex justify-space-between">
                <v-text-field
                  :rules="descriptionRules"
                  label="Description"
                  v-model="ModalModel.description"
                  required
                ></v-text-field>
              </div>
              <div class="text-center">
                <v-progress-linear
                  v-if="loading == true"
                  color="red"
                  indeterminate
                  rounded
                  height="6"
                ></v-progress-linear>

                <v-btn
                  v-else
                  :disabled="!valid"
                  color="red"
                  class="mr-4 white--text"
                  @click="validates"
                  width="100%"
                >
                  {{ ModalText.btn }}
                </v-btn>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </v-slide-x-transition>

    <v-slide-y-transition>
      <div
        v-if="Dialog == true"
        id="modal-window"
        class="d-flex justify-center align-center"
      >
        <v-card class="modal-alert">
          <v-card-title class="headline red white--text">
            Are you sure to delete this department ?
          </v-card-title>

          <v-card-text class="black--text my-3">
            Every student and course about this department will be deleted
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="bg-secondaire white--text" text @click="CancelDelete()">
              Cancel
            </v-btn>
            <v-btn class="red white--text" text @click="ConfirmDelete(deleteId)">
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
    ...mapGetters(["DepartmentsState", "FacultysState"]),
  },
  methods: {
    ...mapActions([
      "getDepartments",
      "addDepartment",
      "editDepartment",
      "deleteDepartment",
      "getFacultys",
    ]),
    setFaculty() {
      const faculty = [];
      this.FacultysState.forEach((item) => {
        faculty.push(item.name);
      });
      this.facultys = faculty;
    },
    Refresh() {
      this.getDepartments();
      this.message = "Department refresh successfully";
      this.snackbar = true;
      this.Initialize();
    },
    Initialize() {
      this.ModalText.title = "Add new Department";
      this.ModalText.btn = "Add";
      this.ModalModel = {
        name: "",
        acronym: "",
        description: "",
        certificate: "",
      };
    },
    Add() {
      this.Modal = true;
      this.Initialize();
    },
    Edit(item) {
      this.Modal = true;
      this.ModalModel = item;
      this.ModalText.title = "Edit Department";
      this.ModalText.btn = "Update";
    },
    Delete(id) {
      this.Dialog = true;
      this.deleteId = id;
    },
    CancelDelete() {
      this.deleteId = "";
      this.Dialog = false;
    },
    ConfirmDelete(id) {
      this.deleteDepartment(id).then(
        () => {
          this.message = "Department deleted successfully";
        },
        (error) => {
          if (error == "Error: Request failed with status code 400") {
            this.message = "Failed to delete this department";
          }
        }
      );
      this.CancelDelete();
      this.getDepartments();
    },
    getFacultyName(id) {
      for (let i = 0; i < this.FacultysState.length; i++) {
        const faculty = this.FacultysState;
        if (faculty[i]._id == id) {
          return faculty[i].name;
        }
      }
    },
    getFacultyId(name) {
      this.FacultysState.forEach((item) => {
        if (item.name == name) {
          this.faculty_id = item._id;
        }
      });
    },
    validates() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.getFacultyId(this.ModalModel.faculty);

        if (this.ModalModel._id) {
          // update
          const ModalModelUpdate = {
            data: {
              name: this.ModalModel.name,
              acronym: this.ModalModel.acronym,
              description: this.ModalModel.description,
              faculty: this.faculty_id,
              certificate: this.ModalModel.certificate,
            },
            _id: this.ModalModel._id,
          };
          this.editDepartment(ModalModelUpdate).then(
            () => {
              this.message = "Department edit successfully";
            },
            (error) => {
              if (error == "Error: Request failed with status code 400") {
                this.message = "Failed to edit this department";
              }
            }
          );
        } else {
          // add
          const ModelAdd = {
            name: this.ModalModel.name,
            acronym: this.ModalModel.acronym,
            description: this.ModalModel.description,
            faculty: this.faculty_id,
            certificate: this.ModalModel.certificate,
          };
          this.addDepartment(ModelAdd).then(
            () => {
              this.message = "Department added successfully";
            },
            (error) => {
              if (error == "Error: Request failed with status code 400") {
                this.message = "Failed to add department";
              }
            }
          );
        }
        this.loading = false;
        this.Modal = false;
        this.snackbar = true;
        this.getDepartments();
        this.Initialize();
      }
    },
  },
  mounted() {
    this.getDepartments();
    this.getFacultys();
  },
  data() {
    return {
      deleteId: "",
      facultys: [],
      faculty_id: "",
      Dialog: "",
      snackbar: false,
      message: "",
      loading: false,
      valid: true,
      nameRules: [(v) => !!v || "name is required"],
      acronymRules: [(v) => !!v || "acronym  is required"],
      descriptionRules: [(v) => !!v || "description  is required"],
      facultyRules: [(v) => !!v || "faculty is required"],
      certificateRules: [(v) => !!v || "certificate is required"],
      Modal: false,
      ModalText: {
        title: "Add new Department",
        btn: "Add",
      },
      ModalModel: {
        name: "",
        acronym: "",
        description: "",
        certificate: "",
        _id: "",
      },
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "Acronym", value: "acronym" },
        { text: "Faculty", value: "faculty" },
        { text: "Certificate", value: "certificate" },
        { text: "Description", value: "description" },
        { text: "Action", value: "action" },
      ],
    };
  },
};
</script>

<style>
#admin-profil .profil-img img {
  height: 20rem !important;
}
</style>
