import { parseHTML } from "/js/utils/parseHTML.js";

const picturesRenderer = {


    asCard: function (picture) {
        let html = `<div class="card">
                    <a href="photo_detail.html?pictureId=${picture.pictureId}">
                        <div class="ratio ratio-1x1">
                            <img src="${picture.pictureURL}" class="card-img-top picture-image" alt="${picture.description}">
                        </div>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${picture.name}</h5>
                        <p class="card-text">${picture.description}</p>
                    </div>
                </div>`;

        let card = parseHTML(html);
        return card;
    },
    asDetails: function (picture) {
        let html = `<div class="photo-details">
                        <h3>${picture.name}</h3>
                        <h6>${picture.description}</h6>
                        <p>Uploaded by <a href="user_profile.html" class="user-link">User ${picture.userId}</a> </p>
                        <hr>
                        <img src="${picture.pictureURL}" class="img-fluid">
                    </div>`;
        let photoDetails = parseHTML(html);
        return photoDetails;
    },
};

export { picturesRenderer };