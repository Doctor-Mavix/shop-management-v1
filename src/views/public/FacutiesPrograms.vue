<template>
  <div class="white">
    <navbar />
    <!-- <div class="section">
      <div class="section-3"></div>
    </div> -->
    <v-container class="my-12">
      <v-row class="border-b">
        <v-col cols="12" md="4">
          <div>
            <h3 class="primaire">Faculty of Management</h3>
            <ul>
              <li>Accounting</li>
              <li>Economics</li>
              <li>Banking and Finance</li>
              <li>Marketing</li>
              <li>Business Administration/Management</li>
              <li>Human Resource Management</li>
              <li>Public Administration</li>
              <li>Information and Management Technology</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div>
            <h3 class="primaire">Faculty of Art and Social Sciences</h3>
            <ul>
              <li>Mass Communication</li>
              <li>LL.B. Law</li>
              <li>International Relations/Political Science</li>
              <li>Peace keeping and Conflict Resolution</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div>
            <h3 class="primaire">Faculty of Engineering/Applied Sciences</h3>
            <ul>
              <li>Electrical/Electronic Engineering</li>
              <li>Computer Engineering</li>
              <li>Mechanical/Automotive Engineering</li>
              <li>Chemical/Petroleum Engineering</li>
              <li>Civil Engineering</li>
              <li>Computer Science</li>
              <li>Nursing Science</li>
              <li>Community Health</li>
              <li>Architecture/Building Technology</li>
              <li>Estate Management</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div>
            <h3 class="primaire">Faculty of Education</h3>
            <ul>
              <li>
                B.Sc. Education (Agric. Science, Biology, Chemistry, Integrated Science &
                Physics)
              </li>
              <li>B.A Education (Primary Education)</li>
              <li>B.A Education (Early Child hood)</li>
              <li>B.Sc Education (Mathematics)</li>
              <li>Educational Administration & Management</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div>
            <h3 class="primaire">Graduate Programs:</h3>
            <p>
              The following Master Degrees Programs are available in both Part-time and
              Full time:
            </p>
            <ul>
              <li>M.Sc Information Technology</li>
              <li>M.Ed Admin and Planning</li>
              <li>Master in Business Administration</li>
              <li>Master in Public Administration</li>
              <li>M.Sc Journalism</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div>
            <h3 class="primaire">
              Center For Continuing Education & Professional Developement Prgoram
            </h3>

            <ul>
              <li>Web Design with HTML/CSS (2 months)</li>
              <li>Web Design with Dreamweaver (1 month)</li>
              <li>Certificate in Desktop Publishing/Data Processing (2 months)</li>
              <li>Diploma in Desktop Publishing/ Data Processing (4 months)</li>
              <li>Diploma in Computer Graphics/Presentation (2 months)</li>
              <li>Diploma Computer Data Management (2 months)</li>
              <li>Diploma Networking Essentials (2 months)</li>
              <li>Diploma Computer Engineering and Maintenance (2 months)</li>
              <li>Diploma in Project Management (3 months)</li>
              <li>Diploma in Microsoft Office Applications (2 months)</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <div class="border-t py-3 my-3">
        <h3 class="primaire">How to Apply ?</h3>
        <p>
          To gain Admission, either for Undergraduate or Graduat studies, visit our
          University to obtain your Application form. To apply online, Download our PDF
          Application Form or Word Application Form, fill it and submit to our
          Email:afriforduniversity@gmail.com Application form cost 15,000 CFA ($35)
        </p>
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
};
</script>

<style>
.section-3 {
  background: url(../../assets/stock/design/nigeria-flag-2.jpg) center center;
  height: 30vh;
  width: 100%;
  margin-top: 1rem;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}

.section-3::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #18181838;
}
</style>
