function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateData(){
  var points = [];
  for(var i=1; i<200; i++ ){
    if((getRandomBetween(10, 100)<40) && (getRandomBetween(10, 100) > 50)){
       points.push([getRandomBetween(10, 100),getRandomBetween(10, 100)])
    }   
  }
    return points;
}

function generateCategories(){
 var categories = [];
  for(var i = 1; i <= getRandomBetween(4, 20); i++){
    var categorie = {
      name: `Categoria ${i}`,
      data: generateData(),
    }
    categories.push(categorie)
  }
  return categories;
}


Highcharts.chart('container', {
  chart: {
    type: 'scatter',
    zoomType: 'xy'
  },
  title: {
    text: '',
    align: 'left'
  },
  colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
  xAxis: {
    title: {
      text: 'Height'
    },
    labels: {
      format: '{value} m'
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
    title: {
      text: 'Weight'
    },
    labels: {
      format: '{value} kg'
    }
  },
  legend: {
    enabled: true
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 2.5,
        symbol: 'circle',
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      jitter: {
        x: 0.005
      }
    }
  },
  tooltip: {
    pointFormat: 'Height: {point.x} m <br/> Weight: {point.y} kg'
  },
  series:generateCategories()
});
