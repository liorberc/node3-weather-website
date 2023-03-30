const request = require("postman-request");
const geoCode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=3a01c51583cf92375c9ea5aa160be78f&query=' + address + '&limit=1'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!body.data) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.data[0]
            callback(undefined, data)
        }
    })
}

module.exports = geoCode