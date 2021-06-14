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
                <h3 class="text-h5">
                  Dashbord / <span class="primaire">Contact Man</span>
                </h3>
              </div>
            </div>
            <div class="mt-5">contact</div>
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
  data() {},
};
</script>

<style>
#admin-profil .profil-img img {
  height: 20rem !important;
}
</style>
