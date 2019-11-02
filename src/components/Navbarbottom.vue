<template>
<div id="sidebarwhole">
    <div class="wrapper">
        <!-- <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3 id="sidebar-header1">Architect</h3>
                    </div>

                    <ul class="list-unstyled components">
                        <p id="sidebar-header2"><b>MAIN NAVIGATION</b></p>
                        <li class="active">
                            <div role="tablist">
    <b-card no-body class="mb-1" >
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" class="collapsed" v-b-toggle.accordion-1 variant="info" id="first">Dashboards</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><li  class="singleitems">Analytics</li><li  class="singleitems">Advertisement</li><li  class="singleitems">Management</li></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info" id="second">Pages</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><li  class="singleitems">Login</li><li  class="singleitems">Login Boxed</li><li  class="singleitems">Register</li></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="info" id="third">Applications</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><li  class="singleitems">Mailbox</li><li  class="singleitems">Chat</li><li  class="singleitems">Material tabs</li></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
                        </li>
                     
                   
</ul>

   
     
                 </nav>
                 </div>
                 <!-- <div id="main">
  <button class="openbtn" onclick="openNav()">☰ Toggle Sidebar</button>  
  <h2>Collapsed Sidebar</h2>
  <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
</div> -->
                </div>
  <!-- </div>   -->
  </template>    
<script>

export default {
    name: 'navbar-bottom'
   
        // methods:{
        //     openNav(){
        //         mySidebar.style.width = "250px";
        //         mySidebar.style.marginLeft = "250px";

        //     },
        //     closeNav(){
        //         mySidebar.style.width = "0px";
        //         mySidebar.style.marginLeft = "0px";

        //     }

        // }
      
    }



   
</script>
<style>
@import url('http://fonts.googleapis.com/css?family=Pacifico');
#sidebar-header1 {
  font: 400 45px/1.5 'Pacifico', Helvetica, sans-serif;
  color: #2b2b2b;
  text-shadow: 3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05);
  text-align:center;
}

#sidebarwhole{
    width:100%;
    
    background-color:white;
    height:100%;
}

#sidebar-header2{
color: blue;
padding-left:20px;
text-align:center;
}  


.wrapper #first::before{
    background-image: url("../assets/images/rocket-launch.png") ;
    height:30px;
    width: 25px;
    position: absolute;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    content:'';
    top: 10px;
    left:44px;
    color:rgb(201, 199, 199);
  

}



.mb-1{
    width:18%;
}
.wrapper .btn-info {
    background-color:#fff;
    border-color: transparent;
    color: rgb(71, 68, 68);
    font-weight: normal;
}
.wrapper .btn-info:hover{
    background-color: rgb(214, 235, 238);
    color: rgb(79, 135, 209);
    border-color: transparent;
    font-weight: normal;
    box-shadow: none;
}
.wrapper .btn-info:focus{
    background-color: rgb(214, 235, 238);
    color: rgb(79, 135, 209);
    border-color: transparent;
    font-weight: bold;
    box-shadow: none;
}

.wrapper #first:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}

.wrapper #second:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}
.wrapper #third:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}


.wrapper .singleitems{
    content:'';
    border-left: 6px solid green;
    height: 100%;
    padding-left:35px;
    padding-top:0px;
    padding-bottom:0px;
    margin-top:-1px;
    margin-bottom:0px;
    margin-left:33px;
    line-height: 45px;
   
}

.wrapper #first::after{
    background-image: url("../assets/images/angle-arrow-down.png") ;
    height:10px;
    width: 10px;
    position: absolute;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    content:'';
    top: 18px;
    left:80%;
    color:rgb(201, 199, 199);
    transform: rotate(180deg);

}

.wrapper #first.collapsed::after{
    transform:rotate(0deg);
  

}
/*-----------------------------------------------------------------*/

.wrapper #second::before{
    background-image: url("../assets/images/menu.png") ;
    height:30px;
    width: 25px;
    position: absolute;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    content:'';
    top: 10px;
    left:44px;
    color:rgb(201, 199, 199);
  

}



.mb-1{
    width:18%;
}
.wrapper .btn-info {
    background-color:#fff;
    border-color: transparent;
    color: rgb(71, 68, 68);
    font-weight: normal;
}
.wrapper .btn-info:hover{
    background-color: rgb(214, 235, 238);
    color: rgb(79, 135, 209);
    border-color: transparent;
    font-weight: normal;
    box-shadow: none;
}
.wrapper .btn-info:focus{
    background-color: rgb(214, 235, 238);
    color: rgb(79, 135, 209);
    border-color: transparent;
    font-weight: bold;
    box-shadow: none;
}

/* .wrapper #first:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}

.wrapper #second:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}
.wrapper #third:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
} */


.wrapper .singleitems{
    content:'';
    border-left: 6px solid green;
    height: 100%;
    padding-left:35px;
    padding-top:0px;
    padding-bottom:0px;
    margin-top:-1px;
    margin-bottom:0px;
    margin-left:33px;
    line-height: 45px;
   
}
.wrapper #second::after{
    background-image: url("../assets/images/angle-arrow-down.png") ;
    height:10px;
    width: 10px;
    position: absolute;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    content:'';
    top: 18px;
    left:80%;
    color:rgb(201, 199, 199);
    transform: rotate(180deg);

}

.wrapper #second.collapsed::after{
    transform:rotate(0deg);
  

}
/*----------------------------------------------------------------------*/

.wrapper #third::before{
    background-image: url("../assets/images/package.png") ;
    height:30px;
    width: 25px;
    position: absolute;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    content:'';
    top: 10px;
    left:44px;
    color:rgb(201, 199, 199);
  

}



.mb-1{
    width:100%;
}
.wrapper .btn-info {
    background-color:#fff;
    border-color: transparent;
    color: rgb(71, 68, 68);
    font-weight: normal;
}
.wrapper .btn-info:hover{
    background-color: rgb(214, 235, 238);
    color: rgb(79, 135, 209);
    border-color: transparent;
    font-weight: normal;
    box-shadow: none;
}
.wrapper .btn-info:focus{
    background-color: rgb(214, 235, 238);
    color: rgb(79, 135, 209);
    border-color: transparent;
    font-weight: bold;
    box-shadow: none;
}

/* .wrapper #first:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}

.wrapper #second:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
}
.wrapper #third:active {
    color: rgb(79, 135, 209);
    background-color: rgb(214, 235, 238);
    border-color: transparent;
    box-shadow: none;
    font-weight: bold;
} */


.wrapper .singleitems{
    content:'';
    border-left: 6px solid green;
    height: 100%;
    padding-left:35px;
    padding-top:0px;
    padding-bottom:0px;
    margin-top:-1px;
    margin-bottom:0px;
    margin-left:33px;
    line-height: 45px;
   
}
.wrapper #third::after{
    background-image: url("../assets/images/angle-arrow-down.png") ;
    height:10px;
    width: 10px;
    position: absolute;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    content:'';
    top: 18px;
    left:80%;
    color:rgb(201, 199, 199);
    transform: rotate(180deg);


}

.wrapper #third.collapsed::after{
    transform:rotate(0deg);
  

}
/*------------------------------------------------------*/
/* .sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: green;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 50px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 5s;
}

.sidebar a:hover {
  color: red;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: yellow;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#main {
  transition: margin-left 10s;
  padding: 16px;
}*/

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
/*@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
} */
.wrapper .card{
  border: 0px;
}
.wrapper .card-header{
  border-bottom: 0px;
  background-color:transparent;
}
.wrapper .btn{
  border: 0px;
}

@media only screen and (min-width: 992px){
  #sidebarwhole{
    width:20%;
    
    background-color:white;
    height:2923px;
    float:left;
}

}

</style>



 


  
