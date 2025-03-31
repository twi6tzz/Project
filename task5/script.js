async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'a4ea345f0f569ea83f107b1bf11191f8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kk`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Қала табылмады');
        }
        const data = await response.json();
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Температура: ${data.main.temp}°C</p>
            <p>Ауа райы: ${data.weather[0].description}</p>
            <p>Ылғалдылық: ${data.main.humidity}%</p>
            <p>Жел жылдамдығы: ${data.wind.speed} м/с</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}