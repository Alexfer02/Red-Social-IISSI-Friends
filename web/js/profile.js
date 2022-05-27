"use strict";

import { galleryRenderer } from "/js/renderers/gallery.js";
import { picturesAPI_auto } from "/js/api/_pictures.js";
import { sessionManager } from "/js/utils/session.js";
import{ usersAPI_auto} from "/js/api/_users.js";
import{ profileRenderer} from "/js/renderers/profilephoto.js"; 

function main() {
    loadProfile();
    loadGallery();

}
async function loadGallery() {
    let photos = await picturesAPI_auto.getAll();
    let gallery = galleryRenderer.asCardGallery(photos, 4);
    let galleryContainer = document.querySelector("#card-gallery");
    galleryContainer.append(gallery);

    loadEventHandlers();
}
function loadEventHandlers() {
    let cardsList = document.querySelectorAll(".card");

    for (let card of cardsList) {
        card.onmouseenter = mouseEnterHandler;
        card.onmouseleave = mouseLeaveHandler;
    }
}
function mouseEnterHandler(event) {
    let card = event.target;
    card.classList.add("card-hover");
}

function mouseLeaveHandler(event) {
    let card = event.target;
    card.classList.remove("card-hover");
}



async function loadProfile() {
    let userid=sessionManager.getLoggedId();
    let datos = await usersAPI_auto.getById(userid);
    let profile = profileRenderer.asBiography(datos);
    let profileContainer = document.querySelector("#profile-container");
    profileContainer.append(profile);
}



document.addEventListener("DOMContentLoaded", main);