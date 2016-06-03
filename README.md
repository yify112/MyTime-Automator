# MyTime Automator

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000?style=plastic)]() [![Maintenance](https://img.shields.io/maintenance/yes/2016.svg?maxAge=2592000?style=plastic)]()

The MyTime Automator for Wipro™ MyTime uses the CasperJS framework to automate some of the repetitive tasks in filling the efforts in MyTime - so as to _save_ **your** time :innocent:.

## Usage
Open  the _wipromytimeinternal.js_ ~~or _wipromytimeexternal.js_~~(refer [Note](#Note) below) file with your prefered text editor and enter your username and password in the appropriate areas inside the ~~appropriate~~ file. Then run the command:

` casperjs file_name.js `

with the appropriate filename in the command prompt. The script will automatically login with your credentials and open the MyTime app, then retrieve the attendance and update your efforts according to the specified values or it will default to entering the _Training section_ with your _Current Days attendance_.

##### Batch File Instructions
You could also use the Batch files (.bat) to execute the scripts by just double-clicking them, it would automatically open up command prompt and run the casperjs command, however the credentials will still have to be entered, though this only works on windows.

Make sure the .bat file and the appropriate .js file are in the same directory and that the correct .bat file is run in accordance with the correct .js file, i.e. internalBatch.bat -> wipromytimeinternal.js ~~and externalBatch.bat -> wipromytimeexternal.js~~, or just make the path provided during execution is accurate.

The ability to just double-click a file and have the time updated automatically truly makes the process even smoother in my opinion. Just double-click, sit back, relax and enjoy! :bowtie:

### Screenshots

![Main GIF showing full process](./screenshots/mainGIF-optimized.gif?raw=true "Main GIF showing full process")

![Enter credentials](./screenshots/enterCredentials.JPG?raw=true "Enter credentials")

![running command](./screenshots/openedMyTime.JPG?raw=true "running command")

![Final result displaying fetched attendance](./screenshots/finalResult.JPG?raw=true "Completed process")

![Batch file running](./screenshots/batchFileRunning.png?raw=true "Batch file")

![Batch file completed](./screenshots/batchFileComplete.png?raw=true "Batch file complete")

### Requirements 
![PhantomJS version](https://img.shields.io/badge/PhantomJS-2.1.1-green.svg?style=flat-square)
![CasperJS version](https://img.shields.io/badge/CasperJS-1.1.0-red.svg?style=flat-square)

* PhantomJS 2.1.1 - [Installaton instructions](http://phantomjs.org/download.html)
* CasperJS 1.1.0 - [Installaton instructions](docs.casperjs.org/en/latest/installation.html)
* Appropriate credentials (_obviously_ :stuck_out_tongue:)

### Note
The wipro external file (wipromytimeexternal.js) is no longer needed as gateway is no longer necessary and the wipromytimeinternal.js file is sufficient for both internal and external networks. However I've left the external file as it is, for anyone who wishes to use gateway as it hasn't been scrapped yet.

### Disclaimer

* This software and its contents is not affiliated with Wipro™ the organization/the company in any manner whatsoever.
* It utilizes the browser automation features of PhantomJS/CasperJS to automate filling in the _efforts section_, as it is filled multiple times by thousands of employees, which will compound into 100s-1000s of man hours overtime.
* The purpose is purely, to help save time.
* There is NO _'hacking'_ done here, plain automation ONLY, please don't think there is any hacking done.
* So please don't sue me.
* No proprietary software from any place is utilized in any form or during any phase whatsoever.

## Copyright

The MIT License (MIT)

Copyright (c) Fri May 06 2016 sol-invictus481

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORTOR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.