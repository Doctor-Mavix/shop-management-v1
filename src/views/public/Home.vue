<template>
  <div class="white">
      <navbar/>
      <barners />
      <welcome/>
      <rewarded/>
      <foot/>
  </div>
</template>

<script>
import navbar from '../../components/public/NavBar'

import barners from '../../components/public/Barners'


import foot from '../../components/public/Footer'
import Welcome from '../../components/public/Welcome.vue'
import Rewarded from '../../components/public/Rewarded.vue'



export default {
     components : {
        navbar,
        barners,
        foot,
        Welcome,
        Rewarded,

    },

}
</script>

<style>

</style>