# Debuging Tools  

## [REPL](https://nodejs.org/api/repl.html)  
 - `REPL` stands for `Read Evaluate Print Loop`  
### How to use REPL?  
#### Starting Debuging mode
  - `node inspect {YourApp.js}`   
#### Strating REPL  
  - `repl` starts repl mode.  
  -  `list(10)` shows forth 10 lines where the code stops  
  - `n` stands for `NEXT`, means one paragraph.   
  - `c` stands for `Continue`, means execute codes before hit the breaking point.  
   - We can make BreakingPoint using `debugger;` code in line.  

## [Chrome Debugger Tool]  
 ### Starting Chrome version debugging tool  
 - `node --inspect-brk {YourApp.js}`  
 - In Chrome, `chrome://inspect`  
 