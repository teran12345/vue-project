<template>
  <div id="app">
  
    <navbartop />
    <navbarbottom />
    <NavbarMenu />
    <AnalyticsDashboard/>
    <PortfolioPerformance/>
    <TechnicalSupportTimelineExample/>
    <Graphs/>
    <DynamicTables/>
    <TasksListChatBox/>
    <Bottomdata/>
    <Footer/>
    
  </div>
</template>
<script>
 
  import Navbartop from './components/Navbartop.vue';
  import Navbarbottom from './components/Navbarbottom.vue'; 
  import NavbarMenu from './components/NavbarMenu.vue';   
  import AnalyticsDashboard from './components/AnalyticsDashboard.vue';
  import PortfolioPerformance from './components/PortfolioPerformance.vue';
  import TechnicalSupportTimelineExample from './components/TechnicalSupportTimelineExample.vue';
  import Graphs from './components/Graphs.vue'
   import DynamicTables from './components/DynamicTables.vue'
   import TasksListChatBox from './components/TasksListChatBox.vue'
   import Bottomdata from './components/Bottomdata.vue'
   import Footer from './components/Footer.vue'


  export default {
    name: 'app',
    components: {
      Navbartop,
      Navbarbottom,
      NavbarMenu,
      AnalyticsDashboard,
      PortfolioPerformance,
      TechnicalSupportTimelineExample,
      Graphs,
      DynamicTables,
      TasksListChatBox,
      Bottomdata,
      Footer
      
    }
  }
</script>
<style>
body{
  background-color: rgb(235, 231, 231);
}

</style>
