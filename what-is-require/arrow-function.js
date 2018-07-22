var square = x => x * x;//implicts return statement.
/**
 * same with 
 * var square = (x) => {
 *  return x*x;
 * }
 */
console.log(square(9));


var user = {
    name : 'Melon',
    sayHi: () => console.log(`Hi!, I'm ${this.name}`), // Hi I'm undefined
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Melon
    }
}

// user.sayHi();
// user.sayHiAlt();
user.sayHiAlt(1,2,3);