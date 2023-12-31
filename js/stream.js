var categoriesNames = [];
var series = [];
var total = getRandomBetween(4, 20)

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateCategories(){ 
  for(var i = 1; i <= total; i++){
    categoriesNames.push(`Categoria ${i}`)
    series.push({
        name: `Categoria ${i}`,
        data: generateData()
    })
  }
}

function generateData(){
  var data = [];
  for(var i = 1; i <= total; i++){
    data.push(getRandomBetween(1, 10))
  }
  return data;
}

generateCategories()

const colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
     colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],

    title: {
        floating: true,
        align: 'left',
        text: ''
    },
    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: categoriesNames,
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    annotations: [{
        labels: [{
            point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
            },
            text: 'Cancelled<br>during<br>World War II'
        }, {
            point: {
                x: 18,
                xAxis: 0,
                y: 90,
                yAxis: 0
            },
            text: 'Soviet Union fell,<br>Germany united'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],

    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            },
            accessibility: {
                exposeAsGroupOnly: true
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: series,

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
