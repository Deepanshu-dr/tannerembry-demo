var chart = c3.generate({
    bindto: '#hour_chart',
    data: {
        url: 'http://tannerembry.com/json/purchases_clock.json',
        mimeType: 'json',
        colors: {
            Morning: '#a1c0ff',
            Afternoon: '#6699ff',
            Evening: '#123f9a',
            Night: '#082359',
        },
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Purchase Time"
    }
});