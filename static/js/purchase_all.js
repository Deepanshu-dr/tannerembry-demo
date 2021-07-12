var chart = c3.generate({
    bindto: '#scatter_chart',
    data: {
        xs: {
            'shop': 'shop_x',
            'arathi': 'arathi_x',
            'machines': 'machines_x',
        },
        xFormat: '%m-%d-%Y', // 'xFormat' can be used as custom format of 'x'
        url: 'https://tannerembry.onrender.com/json/purchases_all.json',
        mimeType: 'json',
        colors: {
            'arathi': '#a800cb',
            'shop': '#1aa700',
            'machines': '#ff7500',
        },
        type: 'scatter'
    },
    zoom: {
        enabled: true
    },
    axis: {
        x: {
            type: 'timeseries',
            label: 'Date Purchased',
            tick: {
                format: '%m-%d-%Y'
            }
        },
        y: {
            label: 'Time Purchased',
            padding: {bottom:0},
            min: 0
        }
    }
});
