<template>
<div id="ftr">
    <div class="container-fluid padding">
        <div class="row text-center padding jumbotron">
            <div class="col-1">
                <div class="squarearoundspeaker">
                <a><div id="circleabovespeaker"></div>
                <img src="@/assets/images/loudspeaker.png" id="loudspeaker">
                </a>
              
             </div>
            </div>
            <div class="col-1">
                <div class="squarearoundworldwide">
                <a><div id="circleaboveworldwide"></div>
                <img src="@/assets/images/worldwide.png" id="worldwide">
                </a>
                </div>
            </div>
            <div class="col-1">
                <div class="squarearoundpiechart">
                <a><div id="circleabovepiechart"></div>
                <img src="@/assets/images/pie-chart.png" id="piechart">
             </a>
                </div>
            </div>
          
            <div id="footermenubox">
            <div v-if="footermenu" id="footermenu" >
                    <table class="table table-bordered" id="table1">
    <thead>
      <tr>
        <th style="color:grey; font-weight:normal; text-align:left; border-right:1px solid #cccfcd !important;">Overview</th>
        <th style="color:grey; font-weight:normal; text-align:left;">Sales & Marketing</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight:normal; text-align:left; cursor:pointer; border-right:1px solid #cccfcd !important; color:#b3b1af;">Contacts</td>
        <td style="font-weight:normal; text-align:left; cursor:pointer; color:#b3b1af;">Queues</td>
        
      </tr>
      <tr>
        <td style="font-weight:normal; text-align:left; cursor:pointer; border-right:1px solid #cccfcd !important; color:#b3b1af;">Incidents</td>
        <td style="font-weight:normal; text-align:left; cursor:pointer; color:#b3b1af;">Resource Groups</td>
        
      </tr>
      <tr>
        <td style="font-weight:normal; text-align:left; cursor:pointer; border-right:1px solid #cccfcd !important; color:#b3b1af;">Companies</td>
        <td style="font-weight:normal; text-align:left; cursor:pointer; color:#b3b1af;">Goal Metrics</td>
      
      </tr>
      <tr>
        <td style="font-weight:normal; text-align:left; cursor:pointer; border-right:1px solid #cccfcd !important; color:#b3b1af;">Dashboards</td>
        <td style="font-weight:normal; text-align:left; cursor:pointer; color:#b3b1af;">Campaigns</td>
      
      </tr>
    </tbody>
  </table>
            </div>
            </div>
            <div id="gridmenubox">
                <div v-if="gridMenu" id="gridMenu"> 
                    <table id="table2" class="table table-bordered">
                        <tr style="background-color:rgb(194, 68, 78, 0.6)">
                            <th colspan="2" >
                                <h3 style="color:black; text-align:center; ">Two Column Grid</h3><br>
                                <h6 style="color:grey; font-weight:normal; text-align:center;">Easy grid navigation inside popovers</h6>
                            </th>
                        </tr>
                        
                       
                        <tr>
                            <td>
                                <img id="lightericon" src="@/assets/images/lighter.png" style="margin-top:20px;" ><br>
                                <h6>Automation</h6>
                            </td>
                            <td>
                                <img id="reportsicon" src="@/assets/images/barrier.png" style="margin-top:20px;"><br>
                                <h6>Reports</h6>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <img id="trainicon" src="@/assets/images/train.png" style="margin-top:20px;" ><br>
                                <h6>Activity</h6>
                            </td>
                            <td>
                                <img id="gifticon" src="@/assets/images/gift.png" style="margin-top:20px;"><br>
                                <h6>Settings</h6>
                            </td>

                        </tr>
                        <tr colspan="2">
                            <td>
                                <h6 style="margin-top:20px; font-weight:normal;">Link button</h6>
                                </td>
                                <td>
                                <button type="button" class="btn btn-info" style="margin-top:10px;">Info</button>
                                </td>
                            

                        </tr>
                    </table>
                </div>
            </div>
            
                <div v-if="footerMenuArrow" id="footerMenuArrow">
                    <div id="ftrmenuarrow">
                       
                <i class="down"></i>  </div>
                <div id="ftrmenuarrowin">
                <span class="pic arrow-down" ></span>
                </div>
                </div>
                <div v-if="gridMenuArrow" id="gridMenuArrow">
                   
                <div id="grdmenuarrowin">
                <span class="pic arrow-down" ></span>
                </div>
                </div>
           
            <div class="col-5">
               
            
               
                <div  @click="showFooterMenu()" >
                    <div id="squarearoundfootermenutext" style="cursor:pointer;">
                        <h6 style="position:absolute; top:50%; transform:translateY(-50%); color:grey; font-weight:normal; margin-left:50px; cursor:pointer " id="footermenu">Footer Menu</h6>
                    </div>
                </div>
            
                </div>
                
            <div class="col-3">
                <div id="squarearoundgridmenutext">
                    <div @click="showGridMenu()" >
                        <div id="squarearoundgridmenutext" style="cursor:pointer;">
                            <h6 style="position:absolute; top:50%; transform:translateY(-50%); color:grey; font-weight:normal; cursor:pointer">Grid Menu</h6>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import Vue from 'vue'
export default{
    data (){
        return{
            footermenu: false,
            footerMenuArrow: false,
            gridMenu: false,
            gridMenuArrow: false

        }
    },
    methods:{
        showFooterMenu () {
            // alert()
            this.footermenu=!this.footermenu 
            this.footerMenuArrow=!this.footerMenuArrow
            if(this.gridMenu==true){
                this.gridMenu=false
            }
            if(this.gridMenuArrow==true){
                this.gridMenuArrow=false
            }
           
        },
        showGridMenu () {           
            this.gridMenu=!this.gridMenu
            this.gridMenuArrow=!this.gridMenuArrow
            if(this.footermenu==true){
                this.footermenu=false
            }
            if(this.footerMenuArrow==true){
                this.footerMenuArrow=false
            }
        }
    }
}
</script>
<style scoped>
#trainicon{
    height:30px;
    width:30px;
}
#gifticon{
    height:30px;
    width:30px;
}
#reportsicon{
    height:30px;
    width:30px;

}
#lightericon{
    height:30px;
    width:30px;
}
.arrow-down {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid rgb(255, 255, 255);
  position:absolute;
}
#ftrmenuarrow{
    position:absolute;
    top:5px;
    left:850px;
}

#ftrmenuarrowin{
    position:absolute;
    top:8px;
    left:840px;

}
#grdmenuarrowin{
    position:absolute;
    top:12px;
    left:1010px;

}
i {
  border: solid rgb(217, 217, 221);
  border-width: 0 1px 1px 0;
  width:20px;
  height:20px;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
table, tr, td, th{
    border:none !important;
    
    
}
#table1 {
  border: 1px solid rgb(217, 217, 221) !important;
  margin-bottom:0px;
 
}


#footermenubox{
    padding:0px;
    width:300px;
    background-color:white;
    position:absolute;
    top:-216px;
    left:800px;
   
   

}
#gridmenubox{
    padding:0px;
    width:300px;
    background-color:white;
    position:absolute;
    top:-380px;
    left:900px;
   
   

}
#squarearoundfootermenutext{
    width:160px;
    height:60px;
    background-color:transparent;
}
#squarearoundgridmenutext{
    width:80px;
    height:60px;
    background-color:transparent;
}

/* #squarearoundfootermenutext:hover .footermenuclick{
    display:none;
} */

.jumbotron{
    margin-top:30px;
   
    background-image:linear-gradient(to bottom , rgb(184, 181, 181), rgb(248, 248, 244));
    border-radius:0rem;
  padding-bottom:20px;
  padding-top:20px;
    position:relative;
}
#loudspeaker{
    height:30px;
    width:30px;
    /* position:absolute;
    top:80%;
    transform:translateY(-50%); */
}
.squarearoundspeaker{
    height:50px;
    width:50px;
    background-color:transparent;
    border-right:2px solid rgb(194, 201, 201);
    padding-right:0px;
    margin-left:-10px;
}

.squarearoundworldwide{
    height:50px;
    width:50px;
    background-color:transparent;
    border-right:2px solid rgb(194, 201, 201);
    padding-right:0px;
    margin-left:0px;
}
.squarearoundpiechart{
    height:50px;
    width:50px;
    background-color:transparent;
    margin-left:15px;
}

#circleabovespeaker{
    height:5px;
    width:5px;
    border-radius:10px;
    background-color:rgb(165, 117, 117);
    margin-bottom:6px;
    /* position:absolute;
    left:20%;
    top:20%;
    transform:translate(-50%,-50%); */
    margin-left:20px;
}
#circleaboveworldwide{
    height:5px;
    width:5px;
    border-radius:10px;
    background-color:rgb(135, 165, 117);
    margin-bottom:6px;
    /* position:absolute;
    left:20%;
    top:20%;
    transform:translate(-50%,-50%); */
    margin-left:27px;
}
#circleabovepiechart{
    height:5px;
    width:5px;
    border-radius:10px;
    background-color:rgb(147, 138, 185);
    margin-bottom:6px;
    /* position:absolute;
    left:20%;
    top:20%;
    transform:translate(-50%,-50%); */
    margin-left:20px;
}
.squarearoundspeaker:hover #circleabovespeaker{
    height:5px;
    width:5px;
    border-radius:10px;
    background-color:rgb(196, 66, 66);
}
.squarearoundworldwide:hover #circleaboveworldwide{
    height:5px;
    width:5px;
    border-radius:10px;
    background-color:rgb(16, 206, 32);
}
.squarearoundpiechart:hover #circleabovepiechart{
    height:5px;
    width:5px;
    border-radius:10px;
    background-color:rgb(16, 51, 206);
}
#worldwide{
    height:30px;
    width:30px;
    margin-left:10px;
}
#piechart{
    height:30px;
    width:30px;
}


</style>