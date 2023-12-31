function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateBubbles(){
  var bubbles = []
  for(var i = 1; i <= getRandomBetween(4, 15); i++){
    bubbles.push([getRandomBetween(40, 150), getRandomBetween(40, 150), getRandomBetween(40, 150)])    
  }
  return bubbles
}

function generateSeries(){
  var series = []
  for(var i = 1; i <= getRandomBetween(4, 15); i++){
    series.push({
        data: generateBubbles(),       
    })    
  }
  console.log(series)
  return series
}

Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    title: {
        text: '',
        align: 'left'
    },

    xAxis: {
        gridLineWidth: 1,
        accessibility: {
            rangeDescription: 'Range: 0 to 100.'
        }
    },
    colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
    yAxis: {
        startOnTick: false,
        endOnTick: false,
        accessibility: {
            rangeDescription: 'Range: 0 to 100.'
        }
    },

    series: generateSeries()

});
