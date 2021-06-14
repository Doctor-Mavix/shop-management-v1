<template>
  <div class="sidenaves border-r menu">
    <v-card class="mx-auto elevation-0">
      <v-list class="white">
        <router-link to="/admin">
          <v-list-item :class="isActive('AdminHome')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/admin/profil">
          <v-list-item :class="isActive('AdminProfil')">
            <v-list-item-icon>
              <v-icon class="">mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Profil</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/admin/faculty">
          <v-list-item :class="isActive('AdminFaculty')">
            <v-list-item-icon>
              <v-icon class="">mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Faculty</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/admin/department">
          <v-list-item :class="isActive('AdminDepartment')">
            <v-list-item-icon>
              <v-icon class="">mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Department</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/admin/admission-applications">
          <v-list-item :class="isActive('AdminAdmission,AdminShowAdmission')">
            <v-list-item-icon>
              <v-icon class="">mdi-email-newsletter</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Admission</v-list-item-title>
          </v-list-item>
        </router-link>

        <v-list-group :value="false" class="" prepend-icon="mdi-account-multiple">
          <template v-slot:activator>
            <v-list-item-title class="">Students</v-list-item-title>
          </template>

          <v-list-group :value="false" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Student</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="goTo('/admin/market-department')">
              <v-list-item-title>Listes </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="addMarketDepartmentModal()">
              <v-list-item-title>Ajouter </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Categories</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="goTo('/admin/market-categorie')">
              <v-list-item-title>Listes </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="addMarketCategorieModal()">
              <v-list-item-title>Ajouter </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Produits</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="goTo('/admin/market-product')">
              <v-list-item-title>Listes </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-file-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="goTo('/admin/department')">
              <v-list-item-title>Statistique </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-chart-histogram</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item @click="show()">
              <v-list-item-title>Ajouter </v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-plus-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <router-link to="/admin/contact">
          <v-list-item :class="isActive('AdminContactList')">
            <v-list-item-icon>
              <v-icon class="">mdi-gmail</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Contact</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/admin/setting">
          <v-list-item :class="isActive('AdminSetting')">
            <v-list-item-icon>
              <v-icon class="">mdi-cog</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="">Setting</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addMarketDepartmentModal", "addMarketCategorieModal"]),
    goTo(link) {
      this.$router.push(link);
    },
    isActive(name) {
      name = name.split(",");
      for (let i = 0; i < name.length; i++) {
        if (this.$route.name == name[i]) return "active";
      }
    },
  },
  computed: {
    ...mapGetters(["AdminProfilState"]),
  },
  data: () => ({}),
};
</script>

<style>
.sidenaves.menu {
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
}

.sidenaves.menu .icon {
  color: rgb(172, 171, 171) !important;
  transition: all ease-in 0.3s;
}
.sidenaves.menu a,
.sidenaves.menu div,
.sidenaves.menu i {
  color: rgb(172, 171, 171) !important;
  transition: all ease-in 0.3s;
}

.sidenaves.menu div:hover {
  background-color: rgb(220, 235, 220);
}
.sidenaves.menu div,
.sidenaves.menu a {
  color: black !important;
}
.sidenaves.menu i {
  color: #00923f !important;
}
.sidenaves.menu .active div,
.sidenaves.menu .active a,
.sidenaves.menu .active i {
  color: #00923f !important;
}
.sidenaves.menu .active {
  background-color: rgb(220, 235, 220);
  margin: 0 0.1rem;
}
</style>
