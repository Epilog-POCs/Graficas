generateCategories();

Highcharts.chart('container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 55,
      beta: 0
    }
  },
  title: {
    text: '',
    align: 'left'
  },
  plotOptions: {

    pie: {
      innerSize: 100,
      depth: 45,
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    },

  },
  credits: {
    enabled: false
  },
  colors:['#133974', '#393a7a', '#523a7f', '#683885', '#7d368b', '#913290', '#a52b96', '#b91f9c', '#cd05a2'],
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {
      name: 'Browsers',
      colorByPoint: true,
      data: categories
    }
  ],
  drilldown: {
    series: subcategories
  }
});
