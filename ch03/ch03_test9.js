var Users  = [{name : '소녀시대', age : 20}, {name :'걸스데이', age:30}];

var add = function (a , b){
    return a+b;
}


//Users.push(add)
Users.forEach(function(item, index){
    console.log('배열 요소 # ' + index + ": %s" ,item.name)
})

console.log("배열 요소의 수 : %d", Users.length);
