"use strict";

import { picturesRenderer } from "/js/renderers/photos.js";
import { picturesAPI_auto } from "/js/api/_pictures.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { photoswithusersAPI } from "/js/api/photoswithusers.js";


let urlParams = new URLSearchParams(window.location.search);
let pictureId = urlParams.get("pictureId");

async function main() {
    loadPhoto();

    let btnDelete = document.getElementById("button-delete");
    let editBtn = document.querySelector("#button-edit");



    editBtn.onclick = handleEditPhoto;
    btnDelete.onclick = handleDeletePhoto;

    if (pictureId === null) {
        messageRenderer.showErrorAsAlert("Please, provide a pictureId");
        return;
    }
    loadPhotoDetails();
}

async function handleDeletePhoto(event) {
    if (confirm("Do you really want to delete this picture?")) {
        await picturesAPI_auto.delete(pictureId);
        window.location.href = "profile.html";
    }
}

function handleEditPhoto(event) {
    window.location.href = "edit_photo.html?pictureId=" + pictureId;
}


async function loadPhoto() {
    let photo = await photoswithusersAPI.getByPhotoId(pictureId);
    let details = picturesRenderer.asDetails(photo);
    let detailsCol = document.getElementById("photo-details-column");
    detailsCol.append(details);
}

async function loadPhotoDetails() {
    let photoContainer = document.querySelector("#photo-details-column");
    try {
        let photo = await picturesAPI_auto.getById(pictureId)
        let photoDetails = picturesRenderer.asDetails(photo);
        photoContainer.appendChild(photoDetails);
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error loading photo", err);
    }
}

document.addEventListener("DOMContentLoaded", main);