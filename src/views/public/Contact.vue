<template>
  <div class="white">
    <navbar />
    <div class="py-md-12 py-5">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          frameborder="0"
          style="border: 0; width: 100%; height: 312px"
          allowfullscreen
        ></iframe>
      </div>

      <v-container class="">
        <v-row>
          <v-col class="" cols="12" md="6">
            <div>
              <h3 class="text-h4 black--text mb-8">School Contact Information</h3>
              <div class="mb-8">
                <h3 class="text-h4">
                  <v-icon class="text-h4 primaire mr-1">mdi-google-maps</v-icon> Location
                </h3>
                <div class="ml-12 mt-3">
                  <p class="mb-2">
                    AKPAKPA-SENADE (Face-Station) (Opposition-Fuel Station)
                  </p>
                  <p>Cotonou Republic du Benin</p>
                </div>
              </div>

              <div class="mb-8">
                <h3 class="text-h4">
                  <v-icon class="text-h4 primaire mr-1">mdi-gmail</v-icon> Gmail
                </h3>
                <p class="ml-12 mb-2 mt-3">afriforduniversity@gmail.com</p>
                <p class="ml-12">info@afriford.com</p>
              </div>
              <div class="mb-8">
                <h3 class="text-h4">
                  <v-icon class="text-h4 primaire mr-3">mdi-phone</v-icon>Call Us
                </h3>
                <p class="ml-12">(+229) 61408554</p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-container v-if="sendSuccess == true">
              <h3 class="text-h4 green--text mb-12">{{ message }}</h3>
              <div>
                <p>We will answer you soon</p>
              </div>
            </v-container>

            <v-form v-else ref="form" class="form" v-model="valid" lazy-validation>
              <h3 class="text-h4">Send us a message</h3>
              <v-row>
                <v-col cols="12">
                  <div>
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      color="green"
                      label="Your Name"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      color="green"
                      label="Your Email"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>
                    <v-text-field
                      v-model="phone_number"
                      :rules="phoneRules"
                      color="green"
                      label="Your Phone Number"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>
                    <v-textarea
                      solo
                      v-model="contactMessage"
                      name="message"
                      label="Write your message here"
                    ></v-textarea>
                  </div>
                </v-col>
              </v-row>
              <div>
                <v-btn
                  :disabled="!valid"
                  @click="send()"
                  class="px-5 py-2 rounded bg-primaire white--text"
                >
                  Submit
                </v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
    <foot />
  </div>
</template>

<script>
import navbar from "../../components/public/NavBar";

import foot from "../../components/public/Footer";

import { mapActions } from "vuex";

export default {
  components: {
    navbar,
    foot,
  },
  methods: {
    ...mapActions(["contactUse"]),

    send() {
      if (this.$refs.form.validate()) {
        const form = {
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          message: this.contactMessage,
        };
        console.log(form);
        this.loading = true;
        this.contactUse(form).then(
          () => {
            this.message = "Message sended successfully";
            this.sendSuccess = true;
          },
          (error) => {
            if (error == "Error: Request failed with status code 400") {
              this.message = "Failed to send this message .Try later!";
            }
          }
        );
        this.snackbar = true;
        this.message = "";
        this.loading = false;
      }
    },
  },
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      contactMessage: "",
      valid: true,
      sendSuccess: false,
      emailRules: [
        (v) => !!v || "email is required",
        (v) => /.+@.+\..+/.test(v) || "this email is not valid ",
      ],

      nameRules: [(v) => !!v || "name is required"],
      phoneRules: [(v) => !!v || "phone is required"],
      messageRules: [(v) => !!v || "message is required"],
      snackbar: false,
      message: "",
      loading: false,
    };
  },
};
</script>

<style>
.map iframe {
  height: 60vh !important;
  height: 100vw;
}
</style>
