module.exports.add = (a,b) => a + b;

// mocha require less than 2 sec
module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(()=> {
        callback(a + b);
    }, 1000);
};

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(` `);
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

