<template>
<div class="chart-wrapper">
    <chart :options="chartOptionsLine"></chart>
  </div>
</template>



<script>
export default {
  name: 'LineGraph',
  data: () => ({
    chartOptionsLine: {
  xAxis: {
    data: []
  },
  yAxis: {
    data: []
  },
  series: [
    {
      type: "line",
      data: [63, 75, 72, 92]
    }
  ],
  title: {
   
    
  },
  color: ["#eb901a"]
}
  })
}
</script>


<style>
</style>