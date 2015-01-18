var options = {
    chart: {
        renderTo: 'container',
        type: 'spline'
    },
    title: {
        text: 'Life Expectancy (1960 - 2009)'
    },
    subtitle: {
        text: 'Source: The World Bank'
    },
    tooltip: {
        positioner: function () {
            return { x: 80, y: 50 };
        },
        crosshairs: [true]
    },
    xAxis: {
        'categories': [],
        tickInterval: 10
    },
    yAxis: {
        title: {
            text: 'Years'
        },
        max: 85,
        min: 25
    },
    legend: {
        enabled: false
    },
    series: [],
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    }
};

function get_csv(csv) {
    options.series = [];
    $.get(csv, function(data) {
        // Split the lines
        var lines = data.split('\n');
        $.each(lines, function(lineNo, line) {
            var items = line.split(',');
            // header line containes categories
            if (lineNo == 0) {
                $.each(items, function(itemNo, item) {
                    if (itemNo > 0) options.xAxis.categories.push(item);
                });
            }
            // the rest of the lines contain data with their name in the first position
            else {
                var series = {
                    lineWidth: 1,
                    marker: { radius: 1, symbol: 'circle' },
                    color: '#606060',
                    events: {
                        mouseOver: function () {
                            this.update({
                                color: '#c7254e'
                            });
                        },
                        mouseOut: function () {
                            this.update({
                                color: '#606060'
                            });
                        }
                    },
                    data: []
                };
                $.each(items, function(itemNo, item) {
                    if (itemNo == 0) {
                        series.name = item;
                    } else {
                        series.data.push(parseFloat(item));
                    }
                });
                options.series.push(series);
            }
        });
        var chart = new Highcharts.Chart(options);
    });
}

$(document).ready(function() {
    get_csv('all.csv');
});
