import Axios from 'axios';

const apiKey = 'fd6395d9a02dd05e872efd29dbe81b06';
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`

// Action Types
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${rootURL}&q=${city},ca`
    const request = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}