<template>
<div class="container-fluid padding">
    <div class="row">
        <div class="col-md-6 tsblock">
            <div class="row  text-center padding jumbotron tsteone">
                <div class="col-2">
                    <img id="cloudicon" src="@/assets/images/cloud-computing.png" style="height:30px; width:30px">
                </div>
                <div class="col-8">
                    <h3 style="font-weight:normal; font-size:20px; color:grey; margin-top:5px; margin-left:-10px;">Technical Support</h3>
                </div>
                <div class="col-2">
                    <a href="#"><img id="menuthreelineicon" src="@/assets/images/menuthreeline.png" style="height:20px; width:25px"></a>
                </div>

            </div>
            <div class="row  text-center padding jumbotron tstetwo">
                <div class="col-12" id="slideshow">
                    <div class="slide1">
                        <h4 style="color:grey; font-weight:normal; font-size:18px; text-align:left; padding-left:80px; margin-bottom:0px;">HELPDESK TICKETS</h4>
                        
                       <h1 style="text-align:left; padding-left:80px; margin-bottom:0px;"> <span style="font-weight:bold; color:#eb901a; font-size:60px">34 </span>
                       <span style="font-weight:normal; color:#aba093; font-size:18px">5% </span>
                       <span style="font-weight:normal; color:#363330; font-size:18px">increase</span></h1>
                      
                  <!-- <LineGraph/> -->
                    <h4 style="font-weight:normal; color:#aba093; font-size:18px; text-align:left; padding-left:60px">SALES PROGRESS</h4>
                    </div>
 
                </div> 
        </div>
        <div class="row  text-center padding jumbotron tstethree">
            
                <div class="col-7">
                    <h3 style="color:#787373; font-wight:normal; font-size:18px;text-align:left;">Total Orders</h3>
                    <h5 style="color:#ada8a8; font-wight:normal; font-size:18px; text-align:left;">Last year expenses</h5>
                </div>
                <div class="col-5">
                    <h3 style="font-weight:bold; font-size:40px; color:green; margin-top:5px; text-align:right;">$ 1896</h3>
                </div>
                </div>
                <div class="row  text-center padding jumbotron tstefour">
                    <div class="col-11">
                  
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
   
                </div>
                </div>
                <div class="row  text-center padding jumbotron tstefour">
                    <div class="col-9">
                  <h6 style="text-align:left; color:grey; ">YoY Growth</h6>
                    </div>
                     <div class="col-2">
                  <h5 style="color:grey; ">100%</h5>
                    </div>
                        
   
                </div>
                </div>
<div class="col-md-6" id="te">
    <div class="row  text-center padding jumbotron tsterightone">
                <div class="col-2">
                    <img id="cloudicon" src="@/assets/images/lighter.png" style="height:30px; width:30px">
                </div>
                <div class="col-8">
                    <h3 style="font-weight:normal; font-size:20px; color:grey; margin-top:5px; margin-left:-10px;">Timeline Example</h3>
                </div>
                <div class="col-2">
                    <a href="#"><img id="menuthreelineicon" src="@/assets/images/menuthreeline.png" style="height:20px; width:25px"></a>
                </div>

            </div>
            <div class="row  text-center padding jumbotron tsterighttwo">
                <div class="col-12">
                    <ul>
                        <li class="ahm">All Hands Meeting</li>
                        <li class="yao">Yet another one, at 15:00 PM</li>
                        <li class="bpr">Build the production release</li>
                        <li class="sni">Something not important</li>
                        <li class="yao">Yet another one, at 15:00 PM</li>
                        <li class="bpr">Build the production release</li>
                        <li class="is">This dot has an info state</li>
                        <li class="ds">This dot has a dark state</li>
                        <li class="ahm">All Hands Meeting</li>
                        <li class="yao">Yet another one, at 15:00 PM</li>
                        <li class="bpr">Build the production release</li>
                        <li class="sni">Something not important</li>
                    </ul>  

                </div>

            </div>
            <div class="row  text-center padding jumbotron tsterightthree">
                <div class="col-12">
           <button type="button" class="btn vam btn-dark"><div id="dot"></div>View All Messages</button>
           
        </div>
                </div>
    
</div>


                </div>
         

                
            </div>
        




</template>


<script>
// import LineGraph from './components/LineGraph.vue'

  export default {
    //   name:'LineGraph',
     name: 'TechnicalSupportTimelineExample',
    //    components:{
    //        LineGraph
    //    },
    data() {
      return {
        value: 45,
        max: 100,

      }
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max
      }
    }
  }
</script>
<style scoped>
#te{
    
    padding-left:0px;
    margin-top:2px;
    
    
   
}
.tsblock{
    padding-left:7px;
}
#cloudicon{
    height:10px;
    width:10px;
    margin-top:4px;
}
#menuthreelineicon{
    height:15px;
    width:20px;
    margin-top:6px;
}
.jumbotron{
     padding-top:10px;
    padding-bottom:10px;  
    margin-left:auto;
    margin-right:auto;
    padding-left:20px;
}
.jumbotron.tsteone{
    background-image:linear-gradient(white, white);
    margin-bottom:1px;
    margin-left:0px;
    margin-right:7px;
}
.jumbotron.tstetwo{
    background-image:linear-gradient(white, white);
    margin-bottom:1px;
    margin-left:0px;
    margin-right:7px;
}
.jumbotron.tstethree{
    background-image:linear-gradient(white, white);
    margin-bottom:-1px;
    margin-left:0px;
    margin-right:7px;
}
.jumbotron.tstefour{
    background-image:linear-gradient(white, white);
    border-radius:0px;
    margin-bottom:-1px;
    margin-left:0px;
    margin-right:7px;
}
.jumbotron.tsterightone{
    background-image:linear-gradient(white, white);
    margin-bottom:1px;
    width:100%;
}
.jumbotron.tsterighttwo{
    background-image:linear-gradient(white, white);
    border-radius:0px;
    height:248px;
    overflow-y:scroll;
    margin-bottom:1px;
   
   
}
.jumbotron.tsterightthree{
    background-image:linear-gradient(white, white);
    border-radius:0px;
   
    
    
   
}
.ahm::before{
    content:'';
    border-radius:20px;
    border:2px solid rgb(173, 57, 86);   
    height:12px;
    width:12px;
    position:absolute;
    left:-9px;
     top:50%;
     transform:translateY(-100%);
    
    
}
.yao::before{
    content:'';
    border-radius:20px;
    border:2px solid rgb(237, 240, 61);   
    height:12px;
    width:12px;
    position:absolute;
    left:-9px;
     top:50%;
     transform:translateY(-100%);
}.bpr::before{
    content:'';
    border-radius:20px;
    border:2px solid rgb(95, 201, 81);   
    height:12px;
    width:12px;
    position:absolute;
    left:-9px;
     top:50%;
     transform:translateY(-100%);
    
}
.sni::before{
    content:'';
    border-radius:20px;
    border:2px solid rgb(101, 124, 202);   
    height:12px;
    width:12px;
    position:absolute;
    left:-9px;
    top:50%;
    transform:translateY(-100%);
    
    
}
ul{
    list-style-type: none;
    
    text-align:left;
    margin-left:10px;
    margin-top:40px;
}
li{
    border-left:6px solid rgb(181, 182, 181, 0.3);
    height:100%;
    margin-left:-20px;
    padding-left:40px;
    position:relative;
    margin-bottom:0px;
    padding-bottom:20px;
    

}

.vam{
    border-radius:20px;
    position:relative;
}
#dot {
    width: 16px;
    height: 16px;
    border: 1px solid rgb(183, 192, 58);
    background-color: yellow;
    border-radius: 100%;
    animation: pulsate 1.5s ease-out;
    animation-iteration-count: infinite;
    opacity: 0.5;
    position:absolute;
    left:145px;
    top:0px

}
@keyframes pulsate {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1.0;
    }
    100% {
        opacity: 0.5;
    }
}


</style>