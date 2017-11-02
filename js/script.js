$(function () { 
  Highcharts.setOptions({
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
                ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1
    }
});
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'U.S. Governors'
        },
        subtitle: {
          text: 'Term Endings by Year'
        },
        xAxis: {
            categories: ['2017', // 1
                         '2018', // 2
                         '2019', // 3
                         '2020', // 4
                        ]
        },
        
        series: [{
            name: 'Number of Governors',
            data: [
              11, //1
               4, //2
              32, //3
               2, //4
              ],
        }]
    });
});

