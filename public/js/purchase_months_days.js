var chart = c3.generate({
    bindto: '#monthly_day_chart',
    data: {
        x: 'x',
        xFormat: '%m-%Y', // 'xFormat' can be used as custom format of 'x'
        url: 'http://tannerembry.com/json/purchases_day_by_month.json',
        mimeType: 'json',
        //colors: {
        //    'Arathi Basin': '#9e69a9',
        //    'Shop': '#7bc36e',
        //    'Machines': '#f9a762',
        //},
    },
    zoom: {
        enabled: true
    },
    line: {
        connectNull: true
    },
     axis: {
         x: {
             type: 'timeseries',
             tick: {
                 format: '%m-%Y'
             }
         },
         y: {
             padding: {bottom:0}
         }
     }
});
