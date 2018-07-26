const geocode = require(`../WeatherApplication/apiKeys/apis.json`);
const request = require(`request`);
// Wrapping Promise cause requeste doesn't support Promise.
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
    
        // error -> Machine error (connection error)
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${geocode.GeoApi}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject(`Unable to connect to Google-servers.`);
            } else if(body.status === `ZERO_RESULTS`) {
                reject(`Unable to find that address.`);
            } else if(body.status === `OK`) {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });
            } else {
                reject(body.status);
            }
        });
    });
};

geocodeAddress(`19146`).then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})