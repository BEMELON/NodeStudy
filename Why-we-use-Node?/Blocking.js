var getUser = function addUser(user) {
	for(var i = 0; i < 1000000000 ; i++) {
		// something task
	}

	return {'user1' : user};
}


console.log('User1 Starting.....');
var user1 = getUser('123');
console.log('user1', user1);


console.log('User2 Starting.....');
var user2 = getUser('456');
console.log('user2', user2);


console.log('1 + 2 is ' + (1+2));
