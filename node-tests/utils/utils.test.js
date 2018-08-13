const utils = require(`./utils`);
const expect = require(`expect`);

it(`should add two numbers`, () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA(`number`);
});

it(`should square a number`, (done) => {
    utils.asyncSquare(10, (res) => {
        expect(res).toBe(100).toBeA(`number`);
        done();
    })
});

// done keyword tells mocha that have a async function
// 1초 기다리는 고정이 있기 때문에, done 이라는 매개변수르 통해 async가 있다고 알려주어야 한다. 
it(`should async add twn numbers`, (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA(`number`);
        done(); // 필수적으로 있어야 함.
    });
});

it(`should expect some values`, () => {
    expect({name:"Melon"}).toEqual({name : "Melon"});

    expect([2,3,4]).toInclude(2);
});

it(`should set firstName and lastName`, () => {
    var user = {location: `Philadelphia`, age: 25};
    var res = utils.setName(user, `Be Melon`);

    expect(user).toInclude({
        firstName: `Be`,
        lastName : `Melon`
    });
});