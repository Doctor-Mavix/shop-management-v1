<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash" id="admin-profil">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div class="d-flex justify-space-between">
            <h3 class="text-h5">Dashbord / <span class="primaire">Faculty</span></h3>
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
                >Add Faculty</a
              >
            </div>
          </div>

          <div class="mt-5">
            <v-simple-table>
              <template v-slot:default>
                <thead class="bg-testiaire">
                  <tr>
                    <th class="text-left white--text bold">Name</th>
                    <th class="text-left white--text bold">Acronym</th>
                    <th class="text-left white--text bold">Description</th>
                    <th class="text-left white--text bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in FacultysState" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.acronym }}</td>
                    <td>{{ item.description }}</td>
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
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
            Are you sure to delete this facu;;ty ?
          </v-card-title>

          <v-card-text class="black--text my-3">
            Every department,student and course about this faculty will be deleted
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
    ...mapGetters(["FacultysState"]),
  },
  methods: {
    ...mapActions(["getFacultys", "addFaculty", "editFaculty", "deleteFaculty"]),
    Refresh() {
      this.getFacultys();
      this.message = "Faculty refresh successfully";
      this.snackbar = true;
      this.Initialize();
    },
    Initialize() {
      this.ModalText.title = "Add new Faculty";
      this.ModalText.btn = "Add";
      this.ModalModel = {
        name: "",
        acronym: "",
        description: "",
      };
    },
    Add() {
      this.Modal = true;
      this.Initialize();
    },
    Edit(item) {
      this.Modal = true;
      this.ModalModel = item;
      this.ModalText.title = "Edit Faculty";
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
      this.deleteFaculty(id).then(
        () => {
          this.message = "Faculty deleted successfully";
        },
        (error) => {
          if (error == "Error: Request failed with status code 400") {
            this.message = "Failed to delete this faculty";
          }
        }
      );
      this.CancelDelete();
      this.getFacultys();
    },
    validates() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        if (this.ModalModel._id) {
          // update
          const ModalModelUpdate = {
            data: {
              name: this.ModalModel.name,
              acronym: this.ModalModel.acronym,
              description: this.ModalModel.description,
            },
            _id: this.ModalModel._id,
          };
          this.editFaculty(ModalModelUpdate).then(
            () => {
              this.message = "Faculty edit successfully";
            },
            (error) => {
              if (error == "Error: Request failed with status code 400") {
                this.message = "Failed to edit this faculty";
              }
            }
          );
        } else {
          // add
          this.addFaculty(this.ModalModel).then(
            () => {
              this.message = "Faculty added successfully";
            },
            (error) => {
              if (error == "Error: Request failed with status code 400") {
                this.message = "Failed to add faculty";
              }
            }
          );
        }
        this.loading = false;
        this.Modal = false;
        this.snackbar = true;
        this.getFacultys();
        this.Initialize();
      }
    },
  },
  mounted() {
    this.getFacultys();
  },
  data() {
    return {
      deleteId: "",
      Dialog: "",
      snackbar: false,
      message: "",
      loading: false,
      valid: true,
      nameRules: [(v) => !!v || "name is required"],
      acronymRules: [(v) => !!v || "acronym  is required"],
      descriptionRules: [(v) => !!v || "description  is required"],
      Modal: false,
      ModalText: {
        title: "Add new Faculty",
        btn: "Add",
      },
      ModalModel: {
        name: "",
        acronym: "",
        description: "",
        _id: "",
      },
    };
  },
};
</script>

<style></style>
