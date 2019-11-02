<template>
<div class="container-fluid padding" id="dtwhole">
    <div class="row jumbotron dtone">
        <div class="col-1">
            <img style="margin-top:5px;" id="computer" src="@/assets/images/computer.png">
        </div>
        <div class="col-5">
            <h4 style="font-size:16px; text-align:center; color:grey; font-weight:normal; margin-bottom:0px; margin-top:6px;">Dynamic Tables</h4>
        </div>
        <div class="col-5">
           
            <b-button id="refresh" variant="secondary">Refresh</b-button><b-button id="remove" variant="secondary">Remove</b-button>
           
        </div>
    </div>
    <div class="row jumbotron dtone">
    <div class="col-6">
            <h4 style="color:grey; font-size:18px; font-weight:normal; margin-top:8px; margin-left:20px;">Full text search:</h4> 
        </div>
        <div class="col-6">
             <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>
        
        </div>
         
        <div class="row jumbotron dtthree">
    <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Country</th>
        <th>Area</th>
        <th>Population</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Russia</td>
        <td>17,075,200</td>
        <td>146,989,754</td>
      </tr>
      <tr>
        <td>2</td>
        <td>France</td>
        <td>640,679</td>
        <td>64,979,548</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Germany</td>
        <td>357,114</td>
        <td>82,114,224</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Portugal</td>
        <td>92,090</td>
        <td>10,329,506</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Canada</td>
        <td>9,976,140</td>
        <td>36,624,199</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Vietnam</td>
        <td>331,212</td>
        <td>95,540,800</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Brazil</td>
        <td>8,515,767</td>
        <td>209,288,278</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Mexico</td>
        <td>1,964,375</td>
        <td>1,964,375</td>
      </tr>
      <tr>
        <td>9</td>
        <td>United States</td>
        <td>9,629,091</td>
        <td>324,459,463</td>
      </tr>
      <tr>
        <td>10</td>
        <td>India</td>
        <td>3,287,263</td>
        <td>1,324,171,354</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Indonesia</td>
        <td>1,910,931</td>
        <td>263,991,379</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Indonesia</td>
        <td>1,910,931</td>
        <td>263,991,379</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Tuvalu</td>
        <td>26</td>
        <td>11,097</td>
      </tr>
      <tr>
        <td>13</td>
        <td>China</td>
        <td>9,596,960</td>
        <td>1,409,517,397</td>
      </tr>
      

    </tbody>
  </table>
        </div>
        <div class="row jumbotron dtfour">
            <div class="col-4">
                <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
            </div>
        </div>
</div>
</template>
<script>
export default{
}
</script>
<style scoped>
.padding{
  padding-left:0px !important;
}
#refresh{
    border-top-right-radius:0px;
    border-bottom-right-radius: 0px; 
    font-size:8px;

}
#remove{
    border-top-left-radius:0px;
    border-bottom-left-radius: 0px; 
    font-size:8px;
}
#computer{
    height:25px;
    width:25px;
}
.jumbotron{
    background-image:linear-gradient(white, white);
    padding:5px;
    width:98%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:1px;
    border-radius:0px;
}
.jumbotron.dtthree{
    height:300px;
    overflow-y:scroll;    
}
@media only screen and (min-width: 992px){
 #dtwhole{
    width:80%;
    
   
    float:right;
}

}

</style>

