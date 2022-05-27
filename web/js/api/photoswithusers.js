"use strict";

import { BASE_URL, requestOptions } from './common.js';

const photoswithusersAPI = {

    getByPhotoId: async function(photoId) {
        let response = await axios.get(
            `${BASE_URL}/photoswithusers?pictureId=${photoId}`,
            requestOptions
        );
        return response.data[0];
    },

};

export { photoswithusersAPI };