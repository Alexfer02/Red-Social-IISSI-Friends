"use strict";

import { picturesAPI_auto } from "/js/api/_pictures.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("pictureId");
let currentPhoto = picturesAPI_auto.getById(photoId);

function main() {
    if (photoId !== null) {
        loadPhotoData();
    }

    let photoForm = document.getElementById("form-photo-upload");
    photoForm.onsubmit = handlePhotoSubmit;

    let urlInput = document.getElementById("input-url");
    urlInput.onchange = handleURLchange;
}

function handleURLchange(event) {
    let url = event.target.value;
    let photoPreview = document.getElementById("photo-preview");
    photoPreview.src = url;
}

async function loadPhotoData() {
    // Editing a photo
    let pageTitle = document.getElementById("page-title");
    pageTitle.textContent = "Editing a photo";

    currentPhoto = await picturesAPI_auto.getById(photoId);

    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let descrInput = document.getElementById("input-description");
    let photoPreview = document.getElementById("photo-preview");

    urlInput.value = currentPhoto.pictureURL;
    titleInput.value = currentPhoto.name;
    descrInput.value = currentPhoto.description;
    photoPreview.src = currentPhoto.pictureURL;
}

async function handlePhotoSubmit(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    
    // Validar el formulario
    
    try {
        if (currentPhoto === null) {
            // Creating a new photo
            formData.append("userId", sessionManager.getLoggedId());
            let resp = await picturesAPI_auto.create(formData);
            photoId = resp.lastId;
        } else {
            // Editing a photo
            formData.append("userId", currentPhoto.userId);
            await picturesAPI_auto.update(formData, photoId);
        }

        window.location.href = "photo_detail.html?pictureId=" + photoId;
    } catch (err) {
        let errorMessage = err.response.data.message;
        messageRenderer.showErrorAsAlert(errorMessage);
    }
}

document.addEventListener("DOMContentLoaded", main);