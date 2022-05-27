"use_strict";

import { BASE_URL, requestOptions } from "./common.js";
const authAPI = {
    login: async function (formData) {
        let response = await axios.post(`${BASE_URL}/login`, formData, requestOptions);
        return response.data;
    },
    register: async function (formData) {
        let response = await axios.post(`${BASE_URL}/register`, formData,requestOptions);
        return response.data;
    },
};
export { authAPI };