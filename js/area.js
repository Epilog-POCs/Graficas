function generateData(x){
  var points = [];
  for(var i=1; i<200; i++ ){
    points.push(["xxxxx",getRandomBetween(10, 40)*x])
  }
  points.push(["xxxxx",100*x])
  return points;
}

function generateSeries(){
  var series = []
  for(var i=1; i<getRandomBetween(5, 10); i++ ){
    series.push({
      name: `Serie ${i}`,
      data: generateData(getRandomBetween(1, 10))
    })
  }
  return series;
}
Highcharts.chart('container', {
  chart: {
    type: 'area',
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 30,
      depth: 200
    }
  },
  title: {
    text: ''
  },
  lang: {
    accessibility: {
      axis: {
        xAxisDescriptionPlural: 'The chart has 3 unlabelled X axes, one for each series.'
      }
    }
  },
  yAxis: {
    title: {
      text: '',
      x: -40
    },
    labels: {
      format: '{value:,.0f}'
    },
    gridLineDashStyle: ''
  },
  xAxis: [{
    visible: false
  }, {
    visible: false
  }, {
    visible: false
  }],
  plotOptions: {
    area: {
      depth: 100,
      marker: {
        enabled: false
      },
      states: {
        inactive: {
          enabled: false
        }
      }
    }
  },
  tooltip: {
    valueSuffix: ' MAMSL'
  },
  colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
  series: generateSeries()
});
