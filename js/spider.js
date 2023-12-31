function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateSpider(){
  var spiders = []
  for(var i = 1; i <= 8; i++){
    spiders.push(getRandomBetween(40, 150))    
  }
  return spiders
}

function generateSeries(){
  var series = []
  for(var i = 1; i <= getRandomBetween(4, 15); i++){
    series.push({
      name: `Categoria ${i}`,
      data: generateSpider(),
      pointPlacement: 'on',
      type: 'area',
    })    
  }
  return series
}

Highcharts.chart('container', {

  chart: {
    polar: true,
    type: 'line'
  },
  title: {
    text: '',
  },

  xAxis: {
    categories: ['Comportamiento 1', 'Comportamiento 2', 'Comportamiento 3', 'Comportamiento 4',
                 'Comportamiento 5', 'Comportamiento 6', 'Comportamiento 7', 'Comportamiento 8'],
    tickmarkPlacement: 'on',
    lineWidth: 0
  },
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0
  },
  colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical'
  },

  series: generateSeries(),


});