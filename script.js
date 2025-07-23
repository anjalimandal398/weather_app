const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const location_not_found = document.querySelector('.location-not-found')
const weather_body=document.querySelector('.weather-body')

async function checkWeather(city) {
    const api_key = "a147069a3d5eb2ce4aafb22892cd4c7e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
        response.json());



        if(weather_data.cod===`404`){
            location_not_found.style.display="flex";
            weather_body.style.display="none";
            console.log("error");
            return;
        }
        location_not_found.style.display="none";
        weather_body.style.display="flex";
    // console.log(weather_data);
    
    temperature.innerHTML = `${Math.round
        (weather_data.main.temp -273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;
        
    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
            case 'Clouds':
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/cloud.png";
            break;

            case 'Clear':
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/clear.png";
            break;

            case 'Rain':
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/rain.png";
            break;

            case 'Mist':
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/mist.png";
            break; 

            case 'Snow':
            weather_img.src = "https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/snow.png";
            break;
    }
    

    console.log(weather_data);
    
}

searchBtn.addEventListener('click', () => {
    const city = inputBox.value;
    checkWeather(city);
});