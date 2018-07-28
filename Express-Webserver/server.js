const express =require(`express`);

var app = express();

// dirname -> EXPRESS_WEBSERVEr 까지의 경로
app.use(express.static(__dirname + `/public`));
// request >> header, bodty request, All of Body
// What will you  respon go
app.get(`/`, (req, res) => {
    // res.send(`<h1>Hello Express!</h1>`);
    res.send({
        name: `Belon`,
        likes: [
            `Biking`,
            `Gaming`,
            `Sleeping`,
            `Coding`
        ]
    });
});

app.get(`/about`, (req, res) => {
    res.send(`About Page`);
});
// /bad - send back json with errorMessage

app.get('/bad', (req, res) => {
    res.send({
        errorMessage : `Unable to handle request`
    });
})

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});