const request = require("postman-request");
const foreCast = ({ longitude, latitude }, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fad453d463dd20e43e4fb2de7ba46c27&query=' + latitude + ',' + longitude
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { weather_descriptions, temperature, feelslike } = body.current
            callback(undefined, weather_descriptions[0] + ". It is currently " + temperature + " degrees out. It feels like " + feelslike + " degrees out.")
        }
    })
}

module.exports = foreCast