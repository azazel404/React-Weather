import axios from "axios";

const API_KEY = "7ce6eec79062ce86f7a53a23aea1db8a"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WHEATHER = 'FETCH_WHEATHER';

export  function fetchWhether(city){
    const url_data = `${ROOT_URL}&q=${city},ID`;
    const request_data = axios.get(url_data);
    return{
        type: 'FETCH_WHEATHER',
        payload: request_data
    }
}