const request = require(`supertest`);
const expect = require(`expect`);
var app = require(`./server.js`).app;

it(`should return hello world response`, (done) => {
    request(app)
    .get(`/`)
    .expect(404)
    .expect((res) => {
        expect(res.body).toInclude({
            error: `Page not found.`
        })
    })
    .end(done);
});


// Make a new test
// assert 200
// assert that you exist in users array
it(`should include Be Melon response`, (done) => {
    request(app)
    .get(`/users`)
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude(`Be Melon`)
    })
    .end(done);
});