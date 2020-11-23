import axios from 'axios';

const KEY = 'AIzaSyCUQg_TsoZvDqpCtxXVzzP9x77BU0F7pfY';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});
