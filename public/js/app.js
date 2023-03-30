console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading weather..'
    messageTwo.textContent = ''

    fetch('http://localhost:3020/weather?address='+ search.value).then((response) => {
        response.json().then((response) => {
            if (response.error) {
                messageOne.textContent = response.error
            } else {
                messageOne.textContent = response.latitude + ', ' + response.longitude
                messageTwo.textContent = response.forecastData
            }
        })
    })
})