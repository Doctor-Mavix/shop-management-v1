<template>
  <div class="nav-app">
    <v-app-bar class="white px-md-12" dense dark elevation="0">
      <v-toolbar-title
        ><a class="black--text d-flex logo-dash" href="/admin">
          <div class="logo-img">
            <img class="mr-5" alt="" src="../../assets/stock/design/afriford-logo.png" />
          </div>

          <div>
            <p class="primaire my-0 afriford">AFRIFORD</p>
            <p class="primaire mb-0 mt-0 university">University</p>
          </div>
        </a></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <span class="black--text mr-3">{{ Today() }} </span>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <a
            href=""
            @click.prevent=""
            class="px-5 py-1 rounded-pill bg-mv"
            v-bind="attrs"
            v-on="on"
          >
            <div class="d-flex">
              <v-avatar color="white" size="30">
                <img :src="AdminProfilState.profilPicture" alt="" />
              </v-avatar>

              <div class="d-flex justify-center align-center">
                <span class="ml-2 red--text">{{
                  AdminProfilState.firstname + " " + AdminProfilState.lastname
                }}</span>
              </div>
            </div>
          </a>
        </template>
        <v-list>
          <v-list-item>
            <a href="" @click.prevent="logout()" class="black--text">Logout</a>
          </v-list-item>
        </v-list>
      </v-menu>

      <router-link to="/" class="black--text px-2 bold">
        <v-badge :content="2" :value="0" color="green" overlap>
          <v-icon color="black"> mdi-bell-outline </v-icon>
        </v-badge>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: mapGetters(["AdminProfilState"]),

  methods: {
    ...mapActions(["getAdminProfil", "logout"]),
    Today() {
      const created_date = new Date();

      const months = [
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

      const days = [
        "Sunday",
        "Monday",
        "Thuesday",
        "Wednesday",
        "Tueday",
        "Friday",
        "Saterday",
      ];
      const day = days[created_date.getDay()];
      const year = created_date.getFullYear();
      const month = months[created_date.getMonth()];
      const date = created_date.getDate();

      return day + " " + date + " " + month + " " + year; // final date with time, you can use this according your requirement
    },
  },
  mounted() {
    this.getAdminProfil().then(
      () => {
        // console.log(profil);
        console.log("succes");
      },
      (err) => {
        console.log(err);
        // this.logout();
      }
    );
  },

  data() {
    return {
      items: [{ title: "Logout" }],
    };
  },
};
</script>

<style>
.logo-dash .logo-img img {
  width: 80px !important;
  height: 50px !important;
  margin-top: 0.3rem;
}

.logo-dash .afriford {
  margin-top: 0.5rem !important;
}
.logo-dash .university {
  margin-top: -0.5rem !important;
  font-size: 0.9rem;
  letter-spacing: 0.19rem;
}

.nav-app {
  border-bottom: 1px solid rgba(196, 196, 196, 0.527) !important;
}
</style>
