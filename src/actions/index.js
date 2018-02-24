import axios from 'axios';
const WeatherAPI_KEY = '7df9ca68918c42f59738059847f39cc5';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${WeatherAPI_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}