var chart = c3.generate({
    bindto: '#day_chart',
    data: {
        x : 'x',
        url: 'http://tannerembry.com/json/purchases_days.json',
        mimeType: 'json',
        colors: {
            'Arathi Basin': '#9e69a9',
            'Shop': '#7bc36e',
            'Machines': '#f9a762',
        },
        groups: [
            ['Shop', 'Machines', 'Arathi Basin']
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category' // this needed to load string x value
        }
    }
});