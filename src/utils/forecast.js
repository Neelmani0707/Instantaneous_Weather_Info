const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=63fad72e09d34d4e86f84542213011&q=' + latitude + ',' + longitude +'&aqi=no'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.temp_c+ ' degress out.')
        }
    })
}

module.exports = forecast