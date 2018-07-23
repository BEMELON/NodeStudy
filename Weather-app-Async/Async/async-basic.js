/**
 * Order : 
 *  1. Starting app...
 *  2. Finishing app...
 *  3. Inside of callBack
 *  4. Second CallBack function
 */
console.log(`Starting app...`);

setTimeout(() => console.log(`Inside of callBack`), 2000);

setTimeout(() => console.log(`Second Call back function`), 0);

console.log(`Finishing app..`);


// Check the flow

/**
 *  4-27, Call Stack & Event Loop
 * console.log(`Starting app...`);

setTimeout(() => console.log(`Inside of callBack`), 2000);

setTimeout(() => console.log(`Second Call back function`), 0);

console.log(`Finishing app..`);

 Call Stack (Engine V8)
1. main()
2. setTimeout (2sec)
4. setTimeout(0sec)
7 . main() pop
9. callback(0sec)
10. console.log()
 11. pop all
 14. callback(2sec)
 15. console.log()

Node Api
 3. setTimeout(2sec)
 5. setTimeout(0 sec)


Event loop -> check that calStack is empty
 => this timing is when the main() stack is poped
 Callback Queue ( wait for Call Stack empty)
 6. setTieout(0 sec)
 8. mov setTimeout(0sec), Call stack
 12. setTimeout( 2sec)
 13. mov setTimeout(2sec, Call stack)
 * 
 */