<template>
<div id="analytics-dashboard">
    <div class="container-fluid padding">
        <div class="row text-center padding jumbotron">
            <div class="col-md-2">
               <img id="airplaneicon" src='@/assets/images/airplane.png'>
            </div>
            <div class="col-md-7 ">
               <h3 class="display-4 ad">Analytics Dashboard</h3>
               <p class="ad">This is an example dashboard created using built-in elements and components</p>
            </div>
            <div class="col-md-3">
               <button id="star-button" type="button" class="btn btn-secondary"><img id="staricon" src='@/assets/images/star.png'></button>
               <button id="create-button" type="button" class="btn btn-success"><b>+ Create New</b></button>
            </div>
        </div>
    </div>
    </div>

</template>
<script>
export default{

}

</script>
<style>
.starcreate{
    margin-left:27%;
    margin-right:auto;
}
.ad{
    text-align:center;
}

#analytics-dashboard{
    margin-top:-30px;
  
}
#airplaneicon{
    height:75px;
    width: 75px;
    min-height:60px;
    min-width: 60px;
    margin-top:25px;
    padding:10px;
    background-color:white;
    border-radius:10px;
    box-shadow: 2px 1px 48px 3px rgba(0,0,0,0.25);
}
.padding{
    padding:0px;
}
h3, p{
    text-align:left;
}
#staricon{
    height:20px;
    width:20px;
    margin-bottom:3px;
}
#create-button{
margin-left:5px;
margin-top:30px;
box-shadow: 2px 1px 48px 3px rgba(0,0,0,0.25);
}
#star-button{
    margin-top:30px;
    box-shadow: 2px 1px 48px 3px rgba(0,0,0,0.25);
}
.jumbotron{
   
    background-image:linear-gradient(to bottom , rgb(177, 176, 176), rgb(252, 252, 249));
    border-radius:0rem;
    padding-top:30px;
}
.container-fluid.padding{
    padding-right:0px;
}
@media only screen and (min-width: 992px){
  #analytics-dashboard{
    width:80%;
    
   
    float:right;
}

}


</style>
