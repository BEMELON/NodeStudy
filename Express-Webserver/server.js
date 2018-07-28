const express =require(`express`);
const hbs = require(`hbs`);
const fs = require(`fs`);
var app = express();

hbs.registerPartials(__dirname + `/views/partials`);
hbs.registerHelper(`getCurrentYear`,() => new Date().getFullYear()); // Similar with Macro function
hbs.registerHelper(`screamIt`, (text) => text.toUpperCase())


app.set(`view engine`, `hbs`);
// dirname -> EXPRESS_WEBSERVER 까지의 절대경로
app.use((req, res, next) => {
    // when next() occurs. Application continue to run 
    var now = new Date().toString(); 
    // method -> get, post 
    // url -> /, /about, /help ...
    var log = `${now} : ${req.method} ${req.url}`;
    console.log(log);
   
    fs.appendFile(`server.log`, log + `\n`, (err) => {
        if (err) {
            console.log(`Unable to append to server log`);
        } 
    });
    next();
});

app.use(express.static(__dirname + `/public`));
// request >> header, bodty request, All of Body
// What will you  respon go
app.get(`/`, (req, res) => {
    res.render(`home.hbs`, {
        name: `Belon`,
        likes: [
            `Biking`,
            `Gaming`,
            `Sleeping`,
        ],
        welcomeMessage: `Welcome to my Page!`
    })
});

app.get(`/about`, (req, res) => {
    res.render(`about.hbs`, {
        pageTitle : `About Page`,
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage : `Unable to handle request`
    });
})

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});