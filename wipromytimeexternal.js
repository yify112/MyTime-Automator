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
//	WIPRO MY TIME EXTERNAL NETWORK
// ---------------------------------
//	Hello! This file uses CasperJS and PhantomJS to automate some of the repetitive tasks of filling in the efforts in the Wipro™ MyTime website.
//=============================================================================


//	CasperJS settings
var casper = require('casper').create({
	verbose: true,
	logLevel: 'error', // change from 'error' to 'debug' for verbose information
	pageSettings: {
		loadPlugins: false,
		userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36'
	}
});

//	Begin
//	Start wipro internal url
casper.start('https://gateway.wipro.com/', function () {
	'use strict';
	this.echo("Page title is: " + this.getTitle());
	// Change viewport according to desired resolution for photographs
	casper.viewport(1366, 768);
});

//	Enter Username and Password here
//	Load Main page and fill form
casper.then(function () {
	'use strict';
	casper.waitForSelector('input', function () {
		casper.echo('input selector loaded');
		try {
			this.fillSelectors('#auth_form', {
				// Enter USERNAME(ADID) and PASSWORD inside the DOUBLE-QUOTES ACCORDINGLY
				'#input_1': '', //Username
				'#input_2': '' //Password
			}, true);
			this.click('input[value="Logon"]');
		} catch (e) {
			this.echo(e);
			casper.echo('Error in filling the form');
		}
	});
	casper.wait(2000);
	casper.capture('formFilled.png');
	casper.echo('formFilled.png captured');
});

// REDUNDANT CODE BELOW - keeping it here, commented out, as the I felt the logic used to remove the "target = _blank" attribute was cool :D
// Remove the need for opening in new tab
/*casper.then(function () {
	'use strict';
	casper.waitForSelector('.gtw-container', function () {
		this.evaluate(function () {
			// Removes the "target = _blank" attribute as opening in new tab is unnecessary
			[].forEach.call(__utils__.findAll('a'), function (link) {
				link.removeAttribute('target');
			});
		});
		try {
			this.echo('gtw-container loaded');
			casper.click('a.mywipro');
			casper.capture('tilesPage.png');
			casper.echo('tilesPage.png loaded and captured');
		} catch (e) {
			this.echo(e);
			casper.capture('tilesPageError.png');
			casper.echo('tilesPageError.png captured');
		}
	});
});*/

// Open form page again
casper.thenOpen("https://gateway.wipro.com/f5-w-687474703a2f2f6e65776d79776970726f2e776970726f2e636f6d$$/irj/portal", function () {
	'use strict';
	casper.capture('formPage.png');
	casper.echo('formpage.png captured and loaded');
});

// Fill form again
casper.then(function () {
	"use strict";
	// OLD METHOD - Use if they ever revert back
	/*casper.waitForSelector('.login_btn_main', function () {
		this.echo('login_btn_main loaded');
	});*/
	try {
		// OLD METHOD - Use if they ever revert back
		/*casper.fill('form#logonForm', {
			// Enter USERNAME(ADID) and PASSWORD inside the DOUBLE-QUOTES ACCORDINGLY
			'j_username': '', //Username
			'j_password': '' //Password
		}, true);*/
		casper.fill('div#formsAuthenticationArea', {
			// Enter USERNAME(ADID) and PASSWORD inside the DOUBLE-QUOTES ACCORDINGLY
			'UserName': '', //Username
			'Password': '' //Password
		}, true);
		casper.click('span#submitButton');
	} catch (e) {
		this.echo(e);
	}
	casper.capture('main-form.png');
	casper.echo('main-form.png captured main-form is filled');
});

//	Open MyTime
// OLD URL,use if they ever revert back
/*casper.thenOpen('https://gateway.wipro.com/f5-w-687474703a2f2f6e65776d79776970726f2e776970726f2e636f6d$$/irj/portal?NavigationTarget=navurl://e5d876a160ab08c343ce57c12518b5b6', function () {
	'use strict';
	casper.echo('Successfully opened MyTime URL');
	casper.capture('myTime.png');
	casper.echo('myTime.png captured');
});*/

//	Open MyTime
casper.then(function () {
	'use strict';
	try {
		casper.thenOpen('https://mywipro.wipro.com/irj/portal?NavigationTarget=navurl://e5d876a160ab08c343ce57c12518b5b6', function () {
			casper.echo('Successfully opened MyTime URL');
			casper.capture('myTime.png');
			casper.echo('myTime.png captured');
		});
	} catch (e) {
		casper.echo(e);
	}
});

//	Directly open main MyTime grid URL
casper.thenOpen('https://wscloudapp2.wipro.com/myTime/tmsGrid.html', function () {
	"use strict";
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


	// Switch case could be utilized, however if/else is used to provide maximum customizability in terms of form field input, if on a particular day, a different field entry is desired

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
// End
