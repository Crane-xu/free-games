const axios = require("axios");

export const GetGamesList = (params) => {
    return axios({ method: 'get', url: `/api/games`, params});
}

export const GetGameDetail = (params) => {
    return axios({ method: 'get', url: `/api/game`, params});
}

// export const GetGameBackground = (params) => {
//     return axios({ method: 'get', url: `/g/${params.id}/background.jpg`});
// }