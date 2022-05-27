
import { parseHTML } from "/js/utils/parseHTML.js";

const itemsRenderer = {

    asCard: function (picture) {
        let html = `<div class="container">
                    <img src="${picture.pictureURL}">
                    <p>${username}</p>
                    </div>`;
        let card = parseHTML(html);
        return card;
    }
}

export {itemsRenderer};