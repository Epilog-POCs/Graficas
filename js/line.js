generateLineCategories() 

Highcharts.chart('container', {
  chart: {
    type: 'area'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    max: 50,
    title: {
      text: ''
    }
  },
  colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: true
    }
  },
  series: categories
});