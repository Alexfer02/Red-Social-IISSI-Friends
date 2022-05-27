"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { picturesRenderer } from "/js/renderers/photos.js";

const galleryRenderer = {


    asCardGallery: function (photos, photosPerRow) {
        let colSize = 12 / photosPerRow;
        let gallery = parseHTML('<div class="row text-center"></div>');

        for (let photo of photos) {
            let col = parseHTML('<div class="col-md-${colSize}"></div>');
            let card = picturesRenderer.asCard(photo);
            col.append(card);
            gallery.append(col);
        }

        return gallery;
    },
};


export { galleryRenderer };