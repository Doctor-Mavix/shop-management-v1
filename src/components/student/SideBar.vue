<template>
  <div class="bg-testiaire sidenave">
        <div class="d-flex justify-center align-center mt-3 border-b">
            <div>
                <v-avatar
                size="150"
                >
                    <img src="../../assets/stock/student/student1.jpg" alt="">

                </v-avatar>

                <div>
                    <p class="white--text text-center text-h5 mb-1">Aman LIKAK</p>
                    <p class="white--text text-center">CIT 200L</p>
                </div>
            </div>
        </div>

        <div>
            <div class="px-md-12 border-b py-2 menu">
                <router-link to="/student" class="link  ">My Profil</router-link>
            </div>
            
            <div class="px-md-12 border-b py-2 menu">
                <router-link to="/student/programme" class="link  ">Programme</router-link>
            </div>
            <div class="px-md-12 border-b py-2 menu">
                <router-link to="/student/resultat" class="link  ">Resultat</router-link>
            </div>
            <div class="px-md-12 border-b py-2 menu">
                <router-link to="/student/profil" class="link  ">Demande de bourse</router-link>
            </div>
            <div class="px-md-12 border-b py-2 menu">
                <router-link to="/student/profil" class="link  ">Contact Admin</router-link>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.sidenave .menu{
    letter-spacing: .1rem;
    font-size: 1.3rem;
}
</style>