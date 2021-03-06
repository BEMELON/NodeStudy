const yargs = require(`yargs`);
const geocode = require(`./geocode/geocode.js`);
const weather = require(`./weather/weather.js`);
const argv = yargs
    .options({
        a: {
            demand : true,
            alias: `address`,
            describe: `Address to fetch weather for`,
            string: true
        }
    })
    .help()
    .alias(`help`, `h`)
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.Longitude, (errorMeesage, results) => {
            if(errorMeesage) {
                console.log(errorMeesage);
            } else {
                console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}`);
            }
        });
    }
});

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyB8p2OTXbV5UpZV4sdQyOuwSsCIT58jD-A`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
})
