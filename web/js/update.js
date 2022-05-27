"use strict"
import { sessionManager } from "/js/utils/session.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";
import { usersAPI_auto } from "/js/API/_users.js";

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");
let currentPhoto = null;

function main() {
    if (userId !== null) {
        loadDatos();
        userValidator();
    }

    let photoForm = document.getElementById("form-floating");
    photoForm.onsubmit = handleDatoSubmit;

    
}

async function loadDatos() {
    // Editing a profile
    

    currentPhoto = await usersAPI_auto.getById(userId);

    let usernameInput = document.getElementById("username-input");
    let emailInput = document.getElementById("email-input");
    let passwordInput = document.getElementById("password-input");
    let dateOfBirthInput = document.getElementById("dateOfBirth-input");
    let avatarURLInput = document.getElementById("avatarURL-input");
    let genderInput = document.getElementById("gender-input");
    let hairColorInput = document.getElementById("hairColor-input");
    let eyeColorInput = document.getElementById("eyeColor-input");
    let heightInput = document.getElementById("height-input");
    let wheightInput = document.getElementById("wheight-input");
    let bioInput = document.getElementById("bio-input");
    let addressInput = document.getElementById("address-input");
    let provinceselectcontainer = document.getElementById("province-select-container");
    let postcodeIdInput = document.getElementById("postcodeId-input");

    usernameInput.value = currentPhoto.username;
    emailInput.value = currentPhoto.email;
    passwordInput.value = currentPhoto.password;
    dateOfBirthInput.value = currentPhoto.dateOfBirth;
    avatarURLInput.value = currentPhoto.avatarURL;
    genderInput.value = currentPhoto.gender;
    hairColorInput.value = currentPhoto.hairColor;
    eyeColorInput.value = currentPhoto.eyeColor;
    heightInput.value = currentPhoto.height;
    wheightInput.value = currentPhoto.wheight;
    bioInput.value = currentPhoto.bio;
    addressInput.value = currentPhoto.adress;
    provinceselectcontainer.value = currentPhoto.provinceId;
    postcodeIdInput.value = currentPhoto.postcodeId;
}

async function handleDatoSubmit(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    // Validar el Usuario

    try {
        if (currentPhoto === null) {
            // Crear Un nuevo Usuario
            formData.append("userId", sessionManager.getLoggedId());
            let resp = await usersAPI_auto.create(formData);
            userId = resp.lastId;
        } else {
            // Editing a profile
            formData.append("userId", currentPhoto.userId);
            await usersAPI_auto.update(formData, userId);
        }

        window.location.href = "update.html?userId=" + userId;
    } catch (err) {
        let errorMessage = err.response.data.message;
        messageRenderer.showErrorAsAlert(errorMessage);
    }
}

document.addEventListener("DOMContentLoaded", main);