<template>
<div class="container-fluid padding" id="gwhole">
    <div class="row">
        <div class="col-md-3">
            <div class="row  text-center padding jumbotron graphsone">
              <h2 style="margin-left:20px; padding:0px; margin-bottom:0px; position:absolute; top:10%; left:6%;"><span style="color:grey; font-weight:normal; font-size:30px;">$</span>&nbsp;874</h2>
                <h5 style="color:grey; font-weight:normal; font-size:20px; position:absolute; top:25%; left:14%; ">sales last month</h5>
                <div class="chart-wrapper">
                   <chart :options="chartOptionsLine1"></chart>
                 </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row  text-center padding jumbotron graphsone two">
              <h2 style="margin-left:20px; padding:0px; margin-bottom:0px; position:absolute; top:10%; left:6%;"><span style="color:grey; font-weight:normal; font-size:30px;">$</span>&nbsp;1283</h2>
                <h5 style="color:grey; font-weight:normal; font-size:20px; position:absolute; top:25%; left:14%; ">sales income</h5>
                <div class="chart-wrapper">
                   <chart :options="chartOptionsLine2"></chart>
                 </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row  text-center padding jumbotron graphsone three">
              <h2 style="margin-left:20px; padding:0px; margin-bottom:0px; position:absolute; top:10%; left:6%;"><span style="color:grey; font-weight:normal; font-size:30px;">$</span>&nbsp;1286</h2>
                <h5 style="color:grey; font-weight:normal; font-size:20px; position:absolute; top:25%; left:14%; ">last month sales</h5>
                <div class="chart-wrapper">
                   <chart :options="chartOptionsLine3"></chart>
                 </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row  text-center padding jumbotron graphsone four">
              <h2 style="margin-left:20px; padding:0px; margin-bottom:0px; position:absolute; top:10%; left:6%;"><span style="color:grey; font-weight:normal; font-size:30px;">$</span>&nbsp;564</h2>
                <h5 style="color:grey; font-weight:normal; font-size:20px; position:absolute; top:25%; left:14%; ">total revenue</h5>
                <div class="chart-wrapper">
                   <chart :options="chartOptionsLine4"></chart>
                 </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {

  name: 'Graphs',
  data: () => ({
chartOptionsLine1: {
  xAxis: {
    data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    show: false
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      type: "line",
      data: [63, 75, 24, 92, 50, 63]
    }
  ],
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  title: {
    
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#35cc47"]
},
chartOptionsLine2: {
  xAxis: {
    data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    show: false
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      type: "line",
      data: [22, 30, 63, 41, 92, 63]
    }
  ],
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  title: {
    
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#2e40b8"]
},
chartOptionsLine3: {
  xAxis: {
    data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    show: false
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      type: "line",
      data: [22, 92, 63, 41, 15, 40]
    }
  ],
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  title: {
    
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#e69e19"]
},
chartOptionsLine4: {
  xAxis: {
    data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    show: false
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      type: "line",
      data: [30, 40, 63, 22, 82, 40]
    }
  ],
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  title: {
    
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#e61938"]
},

  })
}
</script>


<style>
canvas{
  width: 300px !important;
  height: 200px !important;
  margin-top: 0px !important;
  margin-left:-10px !important;
  top:40px !important;
 

  
}
.jumbotron.graphsone{
    background-image:linear-gradient(white, white);
    border-radius:5px;
    height:260px;
    width:227px;
    margin-left:auto;
    padding-left:0px;
    margin-right:auto;
    border-bottom:4px solid #35cc47;
    position:relative;
}
.jumbotron.graphsone.two{
     border-bottom:4px solid #2e40b8;
     margin-left:auto;
     margin-right:auto;
   
}
.jumbotron.graphsone.three{
     border-bottom:4px solid #e69e19;
     margin-left:auto;
     margin-right:auto;
   
}
.jumbotron.graphsone.four{
     border-bottom:4px solid #e61938;
     margin-left:auto;
     margin-right:auto;
   
}
.chart-wrapper .echarts{
  width:200px;
  height:400px;
}
@media only screen and (min-width: 992px){
 /* #gwhole{
  
    
} */
.jumbotron.graphsone.four{
  margin-right:20px !important;
}

}

</style>