const request = require(`request`);
const geocode = require(`../apiKeys/apis.json`);

var geocodeAddress = ((address, callback) => {
    
    var encodedAddress = encodeURIComponent(address);
    
    // error -> Machine error (connection error)
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${geocode.GeoApi}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Unable to connect to Google-servers.`)
        } else if(body.status === `ZERO_RESULTS`) {
            callback(`Unable to find that address.`);
        } else if(body.status === `OK`) {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            })
        } else {
            callback(body.status);
        }
    })
});
module.exports.geocodeAddress = geocodeAddress;