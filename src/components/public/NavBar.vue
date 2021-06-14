<template>
  <div class=" ">
    <div class="white py-2 px-md-12 px-3 d-flex justify-space-between">
      <div>
        <span class="black--text lighter"
          ><v-icon color="black">mdi-phone-outline</v-icon> (+229) 61408554</span
        >
        <span class="black--text ml-sm-7 mt-sm-0 mt-2 d-block d-sm-inline lighter"
          ><v-icon color="black">mdi-gmail</v-icon> afriforduniversity@gmail.com</span
        >
      </div>
      <div class="d-md-none">
        <!-- Languages -->
        <form action="" class="d-inline">
          <select class="black--text white px-3 mx-1" name="languages" id="languages">
            <option value="">En</option>
          </select>
        </form>
      </div>
      <div class="d-none d-md-block">
        <a href="" class="black--text mx-2"
          ><v-icon color="black">mdi-facebook</v-icon></a
        >
        <a href="" class="black--text mx-2"><v-icon color="black">mdi-twitter</v-icon></a>
        <a href="" class="black--text mx-2"
          ><v-icon color="black">mdi-instagram</v-icon></a
        >
        <!-- <a href="" class="black--text mx-2"
          ><v-icon color="black">mdi-pinterest</v-icon></a
        > -->
        <!-- Languages -->
        <form action="" class="d-inline">
          <select class="black--text white px-3 ml-1" name="languages" id="languages">
            <option value="">En</option>
          </select>
        </form>
      </div>
    </div>
    <v-app-bar class="bg-primaire px-md-12 nav-bar" dense dark elevation="0">
      <v-toolbar-title class="d-flex justify-center align-center"
        ><router-link class="black--text logo d-flex mt-12 pt-12" to="/">
          <div class="logo-img">
            <img class="mr-5" alt="" src="../../assets/stock/design/afriford-logo.png" />
          </div>
          <div class="logo-text d-none d-sm-block white--text">
            <span class="text-h3 afriford">AFRIFORD</span> <br />
            <span class="text-h4 university">University</span>
          </div>
        </router-link></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <router-link to="/contact" class="d-lg-block d-none white--text px-4"
        >Covid-19 Information</router-link
      >
      <div class="d-flex d-lg-none px-0 justify-center align-center">
        <v-icon class="apps text-h3" @click="drawer = true">mdi-apps</v-icon>
      </div>
    </v-app-bar>
    <div class="d-none white d-lg-flex align-center justify-center menu">
      <div class="">
        <router-link to="/" class="nav-black px-4" :class="isActive('Home')"
          >Home</router-link
        >

        <router-link
          to="/faculties-programs"
          class="nav-black px-4"
          :class="isActive('FacutiesPrograms')"
          >Faculties and Programs</router-link
        >
        <router-link
          to="/fees-funding"
          class="nav-black px-4"
          :class="isActive('FeesFunding')"
          >Fees and Funding</router-link
        >
        <router-link
          to="/admission"
          class="nav-black px-4"
          :class="isActive('Admission,AdmissionForm')"
          >Admission</router-link
        >
        <router-link
          to="/online-program"
          class="nav-black px-4"
          :class="isActive('OnlineProgram')"
          >Online program</router-link
        >
        <router-link
          to="/scholarship"
          class="nav-black px-4"
          :class="isActive('Scholarship')"
          >Scholarship</router-link
        >
        <router-link to="/contact" class="nav-black px-4" :class="isActive('Contact')"
          >Contact</router-link
        >
      </div>
    </div>

    <!-- drawer -->
    <div id="drawer" v-if="drawer == true">
      <div class="header d-flex justify-space-between">
        <div class="head d-flex ml-2 justify-center align-center">
          <a href="" class="">
            <div class="logo-text white--text">
              <span class="text-h4">AFRIFORD</span> <br />
              <span class="text-h4 ml-1 university">University</span>
            </div>
          </a>
        </div>
        <span class="close text-center mx-2 py-2 white--text" @click="drawer = false"
          >X</span
        >
      </div>
      <div class="main">
        <!-- main drawer nav content -->

        <div class="pt-1 ml-2">
          <!-- our pages -->
          <div class="drawer-item pt-0 px-3">
            <router-link to="/" class="my-4"
              ><v-icon color=" ">mdi-home </v-icon> <span class="ml-2">Home </span>
            </router-link>

            <router-link to="/faculties-programs" class="my-4"
              ><v-icon color=" ">mdi-school</v-icon>
              <span class="ml-2">Faculties and Programs </span>
            </router-link>

            <router-link to="/fees-funding" class="my-4"
              ><v-icon color=" ">mdi-currency-eur</v-icon>
              <span class="ml-2">Fees and Funding </span>
            </router-link>

            <router-link to="/admission" class="my-4"
              ><v-icon color=" ">mdi-email-newsletter</v-icon>
              <span class="ml-2">Admission</span>
            </router-link>

            <router-link to="/online-program" class="my-4"
              ><v-icon color=" ">mdi-wifi</v-icon>
              <span class="ml-2">Online Program</span>
            </router-link>

            <router-link to="/scholarship" class="my-4"
              ><v-icon color=" ">mdi-newspaper</v-icon>
              <span class="ml-2">Scholarship</span>
            </router-link>

            <router-link to="/contact" class="my-4"
              ><v-icon color=" ">mdi-gmail</v-icon>
              <span class="ml-2">Contact</span>
            </router-link>
          </div>
        </div>
        <div class="footer d-flex justify-space-between align-end">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: mapGetters(["panierState", "drawerState"]),

  methods: {
    ...mapActions(["showDrawer"]),
    cancel() {
      this.navSubmitClass = false;
      this.searchForm = false;
    },
    submitTkp() {
      this.cancel();
    },

    search() {
      if (this.searchForm == true) {
        this.submitTkp();
      } else {
        this.searchForm = true;
        this.navSubmitClass = true;
      }
    },
    isActive(name) {
      name = name.split(",");
      for (let i = 0; i < name.length; i++) {
        if (this.$route.name == name[i]) return "active-nav";
      }
    },
  },

  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.apps {
  margin-top: 5rem;
  cursor: pointer;
}

#drawer {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.712);
  top: 0;
  position: fixed;
  z-index: 20;
  color: black;
}
#drawer .header {
  background: linear-gradient(#00923f, #03682f);
  width: 20vw;
  height: 20vh;
}
#drawer .main {
  width: 20vw;
  height: 100%;
  background: rgb(194, 219, 206);
  transition: 0.3s all ease-in-out;
}
#drawer a {
  display: block;
  color: black !important;
}

#drawer .drawer-item {
  border-top: 1px solid rgba(128, 128, 128, 0.376);
}
#drawer .drawer-item:first-child {
  border: none;
}
#drawer .footer {
  height: 15vh;
}
#drawer .footer .auth a {
  background: #001370;
  color: white !important;
}
.drawer .payement-method {
  color: rgb(255, 255, 255);
  background: rgb(3, 205, 241);
}
.drawer .logout {
  color: rgb(0, 132, 255) !important;
}

.drawer .login {
  color: rgb(255, 255, 255);
  background: #001370;
}
.drawer .sign-up {
  color: rgb(255, 255, 255);
  background: rgb(3, 205, 241);
}
#drawer .close {
  cursor: pointer;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
}
.drawer .close:hover {
  background: rgba(0, 0, 0, 0.568);
}
.drawer .domaine {
  overflow-y: scroll;
  height: 55vh;
  width: 70vw;
}
.drawer .domaine a {
  display: block;
  color: white;
}
@media screen and (max-width: 1050px) {
  #drawer .domaine {
    width: 35vw;
  }
  #drawer .header,
  #drawer .main {
    width: 35vw;
  }
  #drawer .footer {
    height: 18vh;
  }
}
@media screen and (max-width: 950px) {
  #drawer .domaine {
    width: 40vw;
  }
  #drawer .header,
  #drawer .main {
    width: 40vw;
  }
  #drawer .footer {
    height: 18vh;
  }
}
@media screen and (max-width: 599px) {
  #drawer .domaine {
    width: 60vw;
  }
  #drawer .header,
  #drawer .main {
    width: 75vw;
  }
  #drawer .footer {
    height: 18vh;
  }
}
</style>
