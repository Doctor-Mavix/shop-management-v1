<template>
  <div class="white">
      <navbar/>
      <div class="d-flex">
          <sidebar/>
          
          <div class="dash-main bg-dash">
                
                <programme/>

          </div>
      </div>
        
                
  </div>
</template>

<script>
import Programme from '../../components/student/Programme.vue'
import navbar from '../../components/student/NavBar'



import sidebar from '../../components/student/SideBar'



export default {
     components : {
        navbar,
        sidebar,
        Programme,

    },
    data(){
        return {
          
        }
    }

}
</script>

<style>

</style>