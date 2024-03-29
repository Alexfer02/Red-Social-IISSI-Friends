/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const userwithaficionesAPI_auto = {

    /**
    * Gets all userwithaficiones
    */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/userwithaficiones`,requestOptions);
        return response.data;
    },

    getByUserId: async function(userId) {
        let response = await axios.get(`${BASE_URL}/userwithaficiones?userId=${userId}`,requestOptions);
        return response.data;
    },

    getById: async function(userId) {
        let response = await axios.get(`${BASE_URL}/userhobbies/userId=${userId}`,requestOptions);
        return response.data[0];
    },
};

export {userwithaficionesAPI_auto};