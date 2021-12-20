import axios from 'axios';
import { GET_TITLES } from "./types";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function getTitlesFromApi() {
    return async function(dispatch) {
        const result = await axios.get(`${BASE_URL}`);
        return dispatch(getTitles(result.data));
    }
}

function getTitles(titles) {
    return {
        type: GET_TITLES,
        titles: titles
    }
}