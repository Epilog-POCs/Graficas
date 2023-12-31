function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateData(){
  var points = [];
  for(var i=1; i<200; i++ ){
    points.push([getRandomBetween(10, 100),getRandomBetween(10, 100),getRandomBetween(10, 100)])
  }
    return points;
}
// Give the points a 3D feel by adding a radial gradient

// Set up the chart
const chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        margin: 100,
        type: 'scatter3d',
        animation: true,
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 10,
            depth: 500,
            viewDistance: 50,
            fitToPlot: false,
            frame: {
                bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                side: { size: 1, color: 'rgba(0,0,0,0.06)' }
            }
        }
    },
    title: {
        text: ''
    },
    colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
    plotOptions: {
        scatter: {
            width: 10,
            height: 10,
            depth: 10
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: null
    },
    xAxis: {
        min: 0,
        max: 100,
    },
    zAxis: {
        min: 0,
        max: 100,
        showFirstLabel: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Data',
        colorByPoint: true,
        data: generateData()
    }]
});


// Add mouse and touch events for rotation
(function (H) {
    function dragStart(eStart) {
        eStart = chart.pointer.normalize(eStart);

        const posX = eStart.chartX,
            posY = eStart.chartY,
            alpha = chart.options.chart.options3d.alpha,
            beta = chart.options.chart.options3d.beta,
            sensitivity = 5,  // lower is more sensitive
            handlers = [];

        function drag(e) {
            // Get e.chartX and e.chartY
            e = chart.pointer.normalize(e);

            chart.update({
                chart: {
                    options3d: {
                        alpha: alpha + (e.chartY - posY) / sensitivity,
                        beta: beta + (posX - e.chartX) / sensitivity
                    }
                }
            }, undefined, undefined, false);
        }

        function unbindAll() {
            handlers.forEach(function (unbind) {
                if (unbind) {
                    unbind();
                }
            });
            handlers.length = 0;
        }

        handlers.push(H.addEvent(document, 'mousemove', drag));
        handlers.push(H.addEvent(document, 'touchmove', drag));


        handlers.push(H.addEvent(document, 'mouseup', unbindAll));
        handlers.push(H.addEvent(document, 'touchend', unbindAll));
    }
    H.addEvent(chart.container, 'mousedown', dragStart);
    H.addEvent(chart.container, 'touchstart', dragStart);
}(Highcharts));