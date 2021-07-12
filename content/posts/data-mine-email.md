+++
title = "Email Scraping And Data Visualization"
description = "Using Google APIs to data mine gmail and D3.js to visualize the data"
summary = ""
toc = true
authors = ["tanner-author"]
tags = ["programming"]
categories = []
series = []
date =  "2018-05-17"
lastmod = "2021-06-11"
draft = false
+++

<!-- <link href="../../css/c3.css" rel="stylesheet" type="text/css"> -->
<!-- <link href="../../css/normalize-e465cb86.css" media="screen" rel="stylesheet" type="text/css" /> -->
<!-- <link href="../../css/foundation.min-978d4ce8.css" media="screen" rel="stylesheet" type="text/css" /> -->
<!-- <link href="../../css/tomorrow-d7cf0921.css" media="screen" rel="stylesheet" type="text/css" /> -->

<link href="/css/c3-b03125fa.css" media="screen" rel="stylesheet" type="text/css" />

<!-- <link href="../../css/style-99fb8989.css" media="screen" rel="stylesheet" type="text/css" /> -->
<!-- <link href="../../css/samples/chart_area_stacked-da39a3ee.css" media="screen" rel="stylesheet" type="text/css" /> -->

Data mining my email with Java and then using D3.js to visualize it. 
<!--more-->

I started selling Minecraft server mods in 2015.
My email inbox was cluttered with Paypal payment receipts and I wanted to develop a way to aggregate all of that data into some sort of useful visualization.
I ended up writing a <a href="https://github.com/snowgears/PaypalGmailComb">Data Mining Utility</a> that scans a Gmail inbox and parses out Paypal payment information into organized objects.
Once the data set was complete, I was able to isolate the information and display some interesting statistics.

***

<script type="text/javascript" src="/js/d3.min.js" charset="utf-8"></script>
<script type="text/javascript"  src="/js/c3.min.js"></script>


<div class='container'>
		<h2 class='title'>Monthly Purchases</h2>
		<div class='chart'>
			<div id='monthly_chart'></div>
		</div>

<h2 class='title'>Day of Week Purchased</h2>
		<div class='chart'>
			<div id='day_chart'></div>
		</div>

<h2 class='title'>Time of Day Purchased</h2>
		<div class='chart'>
			<div id='hour_chart'></div>
		</div>

<h2 class='title'>Email Service Used</h2>
		<div class='chart'>
			<div id='email_chart'></div>
		</div>

<h2 class='title'>All Purchases</h2>
		<div class='chart'>
			<div id='scatter_chart'></div>
		</div>

</div>

<script type="text/javascript" src="/js/purchase_months.js"></script>
<script type="text/javascript" src="/js/purchase_all.js"></script>
<script type="text/javascript"  src="/js/purchase_time.js"></script>
<script type="text/javascript" src="/js/purchase_emails.js"></script>
<script type="text/javascript" src="/js/purchase_days.js"></script>
