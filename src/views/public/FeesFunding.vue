<template>
  <div class="white">
    <navbar />
    <v-container class="py-12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left primaire">Courses</th>
              <th class="text-left primaire">Tuition in cfa</th>
              <th class="text-left primaire">Tuition in naira</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in courses" :key="item.name">
              <td v-html="item.name">{{ item.name }}</td>
              <td v-html="item.cfa">{{ item.cfa }}</td>
              <td v-html="item.naira">{{ item.naira }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div class="mt-12 pt-5 border-t">
        <h3 class="primaire">Mode of payment</h3>
        <p>
          Payable in two Installments either to the School in Cash or through the
          University Bank Account
        </p>
      </div>
      <div class="mt-4 mb-12 pt-5 border-t">
        <h3 class="">LIVING COST</h3>
        <p>
          The above listed fees do not cover Feeding Accommodation, transport and medical
          expenses. These expenses are catered by the students. However we provide you
          here with some estimate of student’s expenses as gathered from Research.
        </p>
        <v-row class="mt-12">
          <v-col
            cols="12"
            md="4"
            class="rounded bg-primaire px-md-6 px-3 white--text py-12"
          >
            <div class=" ">
              <h3>Feeding:</h3>
              <p>
                Depending on your preferences, feeding ranges from 20,000 CFA – 90,000 CFA
                per month.
              </p>
            </div>
            <div>
              <h3>Transportation:</h3>
              <p>
                Depending on where you live; it ranges from 10,000 CFA - 15,000 CFA per
                month
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="rounded px-md-6 px-3 black--text py-12">
            <div class=" ">
              <h3>Accommodation:</h3>
              <p>
                For those who wish to use the University hostel, you should pay for the
                accommodation separately. The hostel accommodation ranges from 80,000 CFA
                (N40,000) and above per Semester. However, if you wish to live outside our
                hostels, the rents within the city ranges from 2,000CFA to 40,000cfa
                (N10,000 - N20,000) per month (excluding Light and water bills). An
                upfront of ten months or one year is usually demanded on first payment
                from most house owners.
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="rounded bg-primaire px-md-6 px-3 white--text py-12"
          >
            <div class=" ">
              <h3>Medical Expenses:</h3>
              <p>
                The medical expenses in the City depend on your medical needs. For the
                students with Health challenges, special request should be made to see the
                doctor with your medical records so as to determine your expenses. But for
                students without Health challenges, your expenses on medicals will only be
                as per hospital visit. In the city, depending on the health challenge the
                medical expense per day (including a night hospitalization, test and
                drugs) ranges from 30,000 CFA (N10,000) and above. But if the illness does
                not require hospitalization, the amount will be less.
              </p>
            </div>
            <div>
              <h3>Transportation:</h3>
              <p>
                Depending on where you live; it ranges from 10,000 CFA - 15,000 CFA per
                month
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <foot />
  </div>
</template>

<script>
import navbar from "../../components/public/NavBar";

import foot from "../../components/public/Footer";

export default {
  components: {
    navbar,
    foot,
  },
  data() {
    return {
      courses: [
        {
          name: "Admission form (Undergraduate)",
          cfa: "15 000",
          naira: "10 000",
        },
        {
          name: "Admission form (Postgraduate)",
          cfa: "30 000 (Masters) <br> 30000 (phd)",
          naira: "20 000 (Masters) <br> 20000 (phd)",
        },

        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name: "Nursing Science",
          cfa: "375 000 / 330 000",
          naira: "250 000 / 220 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name:
            "Public/Community Health <br> Medical Laboratory Science <br>Health Information Management ",
          cfa: "345 000 / 300 000",
          naira: "230 000 / 200 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name:
            "Environmental Science and Resource Management <br> Environmental Engineering <br> Environmental and Chemical Engeneering <br> Renewable Energy and Electrical Engineering",
          cfa: "375 000 / 310 000",
          naira: "250 000 / 220 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name: "Civil Engineering/Building Technology <br> Estate Management",
          cfa: "675 000",
          naira: "450 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name:
            "Architecture <br> Chemical/Petroleum Engineering <br> Mechanical/Automotive Engineering",
          cfa: "1 200 000",
          naira: "800 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name: "Computer Science/Engineering <br> Information Technology",
          cfa: "300 000 / 270 000",
          naira: "200 000 / 180 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name: "Law (LL.B)",
          cfa: "300 000 / 270 000",
          naira: "200 000 /180 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },

        {
          name:
            "Accounting <br> Economics <br> Banking and Finance <br> Marketing <br> Business Administration/Management <br> Human Resource Management <br> Public Administration <br> Information and Management Technology",
          cfa: "270 000",
          naira: "180 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name: "Mass Communication ",
          cfa: "270 000",
          naira: "180 000",
        },
        {
          name: "",
          cfa: "",
          naira: "",
        },
        {
          name:
            "Peace keeping and Conflict Resolution <br> International Relations/Political Science",
          cfa: "285 000",
          naira: "180 000",
        },
        {
          name: "Theatre Art <br> Linguistics",
          cfa: "450 000",
          naira: "300 000",
        },
        {
          name: "Education",
          cfa: "300 000",
          naira: "200 000",
        },
      ],
    };
  },
};
</script>

<style></style>
