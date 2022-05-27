"use strict";

const today = new Date();


async function main() {
    // Assign the handler function to the delete button
    let BajaBtn = document.querySelector("#button-delete");
    BajaBtn.onclick = handleBaja;
    }

    async function handleBaja(event) {
    let answer = confirm("¿ Realmente quieres darte de baja ?");
    if (answer) {
    try {
    await photosAPI_auto.delete(photoId);
    window.location = "/form_update.html";
    } catch (err) {
    messageRenderer.showErrorAsAlert(err.response.data.message);
    }
    }
    }


document.addEventListener("DOMContentLoaded", main);