var chart = c3.generate({
    bindto: '#email_chart',
    data: {
        url: 'http://tannerembry.com/json/purchases_emails.json',
        mimeType: 'json',
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); },
        colors: {
            gmail: '#ff3399'
        }
    },
    donut: {
        title: "Email Providers"
    }
});