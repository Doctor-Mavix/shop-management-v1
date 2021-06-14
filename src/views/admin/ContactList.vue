<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash" id="admin-profil">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div>
            <div class="head px-md-6">
              <div class="">
                <h3 class="text-h5">Dashbord / <span class="primaire">Contact</span></h3>
              </div>
            </div>
            <div class="mt-5">
              <v-card class="mx-auto">
                <v-list two-line>
                  <v-list-item-group
                    v-model="selected"
                    active-class="pink--text"
                    multiple
                  >
                    <template v-for="(item, index) in ContactState">
                      <div :key="item.title">
                        <v-list-item>
                          <template v-slot:default="{}">
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name"></v-list-item-title>

                              <v-list-item-subtitle
                                class="text--primary"
                                v-text="item.email"
                              ></v-list-item-subtitle>
                              <v-list-item-subtitle
                                class="text--primary"
                                v-text="item.phone_number"
                              ></v-list-item-subtitle>

                              <v-list-item-subtitle
                                v-text="item.message"
                                class="mt-5"
                              ></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                              <v-list-item-action-text
                                v-text="item.created_at"
                              ></v-list-item-action-text>
                            </v-list-item-action>
                          </template>
                        </v-list-item>
                      </div>
                      <v-divider
                        v-if="index < ContactState.length - 1"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </div>
          </div>
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
    ...mapGetters(["ContactState"]),
  },
  methods: {
    ...mapActions(["getContact"]),
  },
  mounted() {
    this.getContact();
  },
  data() {
    return {
      selected: [2],
    };
  },
};
</script>

<style>
#admin-profil .profil-img img {
  height: 20rem !important;
}
</style>
