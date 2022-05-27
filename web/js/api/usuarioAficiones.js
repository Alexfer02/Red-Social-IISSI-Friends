"use strict";

import { BASE_URL, requestOptions } from './common.js';

const   usuarioAficionesAPI_auto = {

    getByUserId: async function(userId) {
        let response = await axios.get(`${BASE_URL}/userwithaficiones?userId=${userId}`,requestOptions);
        return response.data;
    },

};

export{ usuarioAficionesAPI_auto};