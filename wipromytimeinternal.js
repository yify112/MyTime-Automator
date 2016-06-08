/*

The MIT License (MIT)

Copyright (c) Thu May 05 2016 sol-invictus

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORTOR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*jslint node:true*/

//=============================================================================
//	WIPRO MY TIME INTERNAL NETWORK
// ---------------------------------
//	Hello! This file uses CasperJS and PhantomJS to automate some of the repetitive 
//	tasks of filling in the efforts in the Wipro™ MyTime website.
//=============================================================================


//	CasperJS settings
var casper = require('casper').create({
	verbose: true,
	logLevel: "error", // change from 'error' to 'debug' for verbose information
	pageSettings: {
		loadPlugins: false,
		userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:45.0) Gecko/20100101 Firefox/45.0'
	}
});

//	Begin
//	Start wipro internal url
casper.start('https://mywipro.wipro.com/irj/portal', function () {
	"use strict";
	casper.echo("Page title is: " + casper.getTitle());
	// Change viewport according to desired resolution for photographs
	casper.viewport(1366, 768);
});

//	Enter Username and Password here
//	Load Main page and fill form
casper.then(function () {
	"use strict";
	try {
		// OLD METHOD - Use if they ever revert back
		/*casper.waitForSelector('.login_btn_main', function () {
			this.echo('Login Button (.login_btn_main) loaded');
		});*/
		/*casper.fill('form#logonForm', {
			// Enter USERNAME(ADID) and PASSWORD inside the DOUBLE-QUOTES ACCORDINGLY
			'j_username': '', //Username
			'j_password': '' //Password
		}, true);*/
		casper.fill('div#formsAuthenticationArea', {
			// Enter USERNAME(ADID) and PASSWORD inside the QUOTES ACCORDINGLY
			'UserName': '', //Username
			'Password': '' //Password
		}, true);
	} catch (e) {
		this.echo(e);
		casper.echo('Error in filling the form');
	}
	casper.click('span#submitButton');
	casper.capture('formFilled.png');
	casper.echo('formFilled.png captured');
});

//	Open MyTime
casper.then(function () {
	"use strict";
	casper.waitForSelector('.appstore_btn', function () {
		// Could use casper.click here however it does not succeed in certain cases, 
		// use if desired
		/*try {
			casper.click('ul#myFavId a[href="/irj/portal?NavigationTarget=navurl://e5d876a160ab08c343ce57c12518b5b6"]');
			casper.echo('Clicked on myTime');
		} catch (e) {
			this.echo(e);
		}*/
		try {
			casper.thenOpen("https://mywipro.wipro.com/irj/portal?NavigationTarget=navurl://e5d876a160ab08c343ce57c12518b5b6", function () {
				casper.echo('Successfully opened MyTime URL');
			});
		} catch (e) {
			casper.echo(e);
		}
	});
	casper.capture('myTime.png');
	casper.echo('myTime.png captured');
});

//	Directly open main MyTime grid URL
casper.thenOpen('https://wscloudapp2.wipro.com/myTime/tmsGrid.html', function () {
	"use strict";
	casper.wait(3000);
	casper.wait(3000, function () {
		casper.capture('myTimeGrid.png');
		casper.echo('Opened MyTime Grid and myTimeGrid.png captured');
	});
});

//	Attendance is retrieved and exact value is entered as efforts
casper.then(function () {
	'use strict';
	var mon = this.getHTML('div[data-slick-index="0"] td.second-row'),
		tue = this.getHTML('div[data-slick-index="1"] td.second-row'),
		wed = this.getHTML('div[data-slick-index="2"] td.second-row'),
		thu = this.getHTML('div[data-slick-index="3"] td.second-row'),
		fri = this.getHTML('div[data-slick-index="4"] td.second-row'),
		sat = this.getHTML('div[data-slick-index="5"] td.second-row'),
		sun = this.getHTML('div[data-slick-index="6"] td.second-row');
	casper.echo("Monday attendance: " + mon);
	casper.echo("Tuesday attendance: " + tue);
	casper.echo("Wednesday attendance: " + wed);
	casper.echo("Thursday attendance: " + thu);
	casper.echo("Friday attendance: " + fri);
	casper.echo("Saturday attendance: " + sat);
	casper.echo("Sunday attendance: " + sun);

	// ==================================================================
	//	There are 11 rows numbered 1 to 12 and 7 columns numbered 0 to 6
	//	Basic ID format for the text boxes is "input[id="1_0_11_0"]" or
	//	input[id="<column-number>_0_<row-number>_0"]
	//	example: input[id="1_0_11_0"] means 2nd column and 11th row
	// ==================================================================


	// ==================================================================
	//	ALL IDs are for column ONE - Change accordingly
	//	--------------------------------------------------
	//	Coding and Unit Testing id="0_0_5_0"
	//	Huddle process id="0_0_1_0"
	//	Project Management id="0_0_9_0"
	//	Training id="0_0_11_0"
	//	Customer reviews and meetings id="0_0_12_0"
	// ==================================================================


	// Switch case could be utilized, however if/else is used to provide maximum customizability in terms of form field input, if on a particular day, a different field entry is desired.

	// Currently Entering for TRAINING field - Change according to preference
	// MONDAY
	if (mon <= 7.5 || mon === 'NA') {
		casper.echo('Monday attendance is: ' + mon + ' Hence not filling attendance');
	} else {
		// Make deductions or change the id or change the fixed value according to preference
		casper.sendKeys('input[id="0_0_11_0"]', mon);
	}

	// TUESDAY
	if (tue <= 7.5 || tue === 'NA') {
		casper.echo('Tuesday attendance is: ' + tue + ' Hence not filling attendance');
	} else {
		casper.sendKeys('input[id="1_0_11_0"]', tue);
	}

	// WEDNESDAY
	if (wed <= 7.5 || wed === 'NA') {
		casper.echo('Wednesday attendance is: ' + wed + ' Hence not filling attendance');
	} else {
		casper.sendKeys('input[id="2_0_11_0"]', wed);
	}

	// THURSDAY
	if (thu <= 7.5 || thu === 'NA') {
		casper.echo('Thursday attendance is: ' + thu + ' Hence not filling attendance');
	} else {
		casper.sendKeys('input[id="3_0_11_0"]', thu);
	}

	// FRIDAY
	if (fri <= 7.5 || fri === 'NA') {
		casper.echo('Friday attendance is: ' + fri + ' Hence not filling attendance');
	} else {
		casper.sendKeys('input[id="4_0_11_0"]', fri);
	}

	// SATURDAY
	if (sat <= 7.5 || sat === 'NA' || sat === 'Week off') {
		casper.echo('Saturday attendance is: ' + sat + ' Hence not filling attendance');
	} else {
		casper.sendKeys('input[id="5_0_11_0"]', sat);
	}

	// SUNDAY
	if (sun <= 7.5 || sun === 'NA' || sun === 'Week off') {
		casper.echo('Sunday attendance is: ' + sun + ' Hence not filling attendance');
	} else {
		casper.sendKeys('input[id="6_0_11_0"]', sun);
	}
	casper.capture('filledGrid.png');
	casper.echo('Filled Grid and filledGrid.png captured');

});

//	Submit the attendance
casper.then(function () {
	"use strict";
	try {
		casper.click('button#btnTMSSubmit');
		casper.wait(1000, function () {
			casper.capture('submitted.png');
		});
		casper.echo('Clicked on submit button and submitted.png captured');
	} catch (e) {
		casper.echo(e);
		casper.echo('Did not click on Submit');
	}
});

//	Casper.run and Final message to display upon successful completion
casper.run(function () {
	"use strict";
	casper.echo('Successfully completed all steps').exit();
});
//	End
