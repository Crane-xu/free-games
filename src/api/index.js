const axios = require("axios");

export const GetGamesList = (params) => {
    return axios.get('/api/games',params);
}