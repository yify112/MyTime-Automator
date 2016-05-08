# MyTime Automator

Hello! This is the MyTime Automator for Wipro™ MyTime. It uses the CasperJS framework to automate some of the repetitive tasks in filling the efforts in MyTime - so as to _save_ **your** time :innocent: :smile:

Just open  the _wipromytimeinternal.js_ or _wipromytimeexternal.js_ file with your prefered text editor and enter your username and password in the appropriate areas inside the appropriate file. Then run the command: 
>`casperjs file_name.js`

with the appropriate filename. The script will automatically login with your credentials and open the MyTime app, then retrive the attendance and update your efforts according to the specified values or default to entering the _training section_ with your _days attendance_.

You could also use the Batch files (.bat) to execute the scripts by just double clicking them, it would automatically open up command prompt and run the casperjs command, though this only works on windows. However the ability to just double click a file and have the time upadted automatically truly makes the process even smoother in my opinion :smile:.

### Prerequisistes

* PhantomJS 2.1.1 - [Installaton instructions](http://phantomjs.org/download.html)
* CasperJS 1.1.0 - [Installaton instructions](docs.casperjs.org/en/latest/installation.html)
* Appropriate credentials (_obviously_ :stuck_out_tongue:)

### Disclaimer

* This software and its contents is not affiliated with Wipro™ the organization/the company in any manner whatsoever.
* It utlizies the browser automation features of PhantomJS/CasperJS to automate filling in the _efforts section_, as it is filled multiple times by thousands of employees, which will compound into 100s-1000s of manhours overtime.
* The purpose is purely, to help save time.
* There is NO _'hacking'_ done here, plain automation ONLY, please don't think there is any hacking done.
* So please don't sue me :stuck_out_tongue_closed_eyes:.
* No proprietary software from any place is utilized in any form or phase whatsoever.

### Screenshots

![Enter credentials](./screenshots/enterCredentials.JPG?raw=true "Enter credentials")

![running command showing "opened MyTime" message](./screenshots/openedMyTime.jpg?raw=true "showing 'opened mytime' message")

![Final result displaying fetched attendance](./screenshots/finalResult.jpg?raw=true "Completed process")

![Batch file running](./screenshots/batchFileRunning.png?raw=true "Batch file")

![Batch file completed](./screenshots/batchFileComplete.png?raw=true "Batch file complete")

### Batch file instructions
* Make sure the .bat file and the appropriate .js file are in the same directory
* Also make sure that the correct .bat file is run in accordance with the correct .js file, i.e. Internal.bat -> wipromytimeinternal.js and External.bat -> wipromytimeexternal.js
* Just double-click, sit back, relax and enjoy! :bowtie:

## Copyright
The MIT License (MIT)

Copyright (c) Fri May 06 2016 sol-invictus 

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORTOR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.