const apiKey = '973f373c57d1d4143b6a3dd875aaec51'

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}
function displayWeather(data){
    const weatherInfoDiv = document.querySelector('.weather-info')
    weatherInfoDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature: ${data.main.temp}°C</strong>
    Feels Like: ${data.main.feels_like}°C</p>
    <p>${data.weather[0].description}</p>
    `
}

function displayError(message) {
    const weatherInfoDiv = document.querySelector('.weather-info');
    weatherInfoDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

document.querySelector('#get-weather-info').addEventListener('click', () =>{
    const city = document.querySelector('input').value
    getWeather(city)
})