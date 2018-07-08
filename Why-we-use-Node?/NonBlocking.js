var getUser = function addUser(user, newFunc) {
	for(var i = 0; i < 1000000000 ; i++) {
		// something task
	}

	newFunc(user);
}


console.log('User1 Starting.....');
getUser('123', function(user1) {
	console.log('user1', user1);
});


console.log('User2 starting.....');
getUser('456', function(user2) {
	console.log('user2', user2);
});



console.log("1 + 2 is " + (1 + 2));
