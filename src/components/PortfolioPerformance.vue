<template>
<div class="container-fluid padding" id="ppwhole">
    <div class="row text-center padding jumbotron one">
        <div class="col-10">
            <h4 id="header-posn">Portfolio Performance</h4>
        </div>     
        <div class="col-2">
            <button type="button" class="btn btn-outline-dark viewallbtn"><b>View All</b></button>
        </div>
        </div>
     
         <div class="row text-center padding jumbotron two">
        <div class="col-md-4" href="#">
            <div class="row">
            <div class="col-3 borderradius one"><a><img id="computer" src="@/assets/images/computer.png"></a></div>
            <div class="col-9 cash-deposits"><ul><li>Cash Deposits</li>
                                   <li>1,7M</li>
                                   <li><span style="color:red"><i class="down" id="firstarrow"></i>&nbsp;&nbsp;54.1%</span> less earnings</li>
                                   </ul>
                                   </div>
        </div>  
        </div>   
        <div class="col-md-4" href="#" >
            <div class="row">
            <div class="col-3 borderradius two"><a><img id="computer" src="@/assets/images/cap.png"></a></div>
            <div class="col-9 cash-deposits"><ul><li>Invested Dividends</li>
                                   <li>9M</li>
                                   <li>Grow rate: &nbsp; <span style="color:rgb(93, 243, 93"><i class="down" id="secondarrow"></i>&nbsp;&nbsp;14.1%</span></li>
                                   </ul>
                                   </div>
        </div>  
        </div>  
        <div class="col-md-4" href="#">
            <div class="row">
            <div class="col-3 borderradius three"><a><img id="computer" src="@/assets/images/three-buildings.png"></a></div>
            <div class="col-9 cash-deposits"><ul><li>Capital Gains</li>
                                   <li style="color:green">$563</li>
                                   <li>Increased by <span style="color:rgb(243, 191, 93)"><i class="up" id="thirdarrow"></i>&nbsp;&nbsp;7.35%</span></li>
                                   </ul>
                                   </div>
        </div>  
        </div>  
    </div>
    <div class="row text-center padding jumbotron">
        <div class="col-12">
           <button type="button" class="btn vcr btn-primary">View Complete Report</button>
        </div>
    </div>
</div>
   



</template>
<script>
export default{

}

</script>
<style scoped>

#header-posn{
    text-align:left;
    font-weight:normal;
    color:grey;
    font-size:20px;
    padding-top:10px;
   
}
.jumbotron{
    
    padding-top:10px;
    padding-bottom:10px;
    width:98%;
    margin-left:auto;
    margin-right:35px;
    
    background-image:linear-gradient(white, white);
    
    
}

.jumbotron.one{
    border-bottom:none;
    margin-bottom:1px;
    padding-right:60px;
}

.container-fluid{
    padding-right:0px;
    padding-left:7px !important;
}

#computer{
height:30px;
width:30px;
position:absolute;
transform: translate(-45%, 50%);

}
.borderradius{
border-radius:60px;
width:60px;
height:60px;
top:40px;
position: absolute;
background-color:rgb(235, 132, 15);
border:1px solid rgb(235, 132, 15);
}
ul{
    margin-left:20px;
    list-style:none;
    text-align:left;
   
}
li{
    margin: 0 0 3px 0;
    color:rgb(150, 149, 149);
}
li:first-child {
  font-weight:normal;

}
li:nth-child(2){
    font-size:50px;
    font-weight:bold;
    color:rgb(83, 81, 81);

}

.borderradius.two{
 background-color:rgb(187, 48, 124);
 border:1px solid rgb(187, 48, 124);
}
.borderradius.three{
 background-color:rgb(31, 129, 48);
 border:1px solid rgb(31, 129, 48);
}
#firstarrow{
  border: solid red;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
#secondarrow{
  border: solid rgb(93, 243, 93);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
}
#thirdarrow{
   border: solid rgb(243, 191, 93);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px 
}
.container-fluid .btn.vcr{
    padding:0.375rem 3.75rem;
}
.container-fluid .btn-primary{
    border-radius:40px;
}
.jumbotron.two{
  
    margin-bottom:1px;;
}

@media only screen and (min-width: 992px){
 #ppwhole{
    width:80%;
    
   
    float:right;
    
}

}


</style>