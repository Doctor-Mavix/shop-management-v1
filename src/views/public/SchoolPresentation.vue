<template>
  <div class="white">
      <navbar/>
    <school-presentation/>
      <foot/>
  </div>
</template>

<script>
import navbar from '../../components/public/NavBar'

import SchoolPresentation from '../../components/public/SchoolPresentation'



import foot from '../../components/public/Footer'



export default {
     components : {
        navbar,
        SchoolPresentation,
        foot,
        
    },

}
</script>

<style>

</style>