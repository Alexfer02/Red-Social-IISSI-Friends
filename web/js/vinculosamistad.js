"use strict";

import { itemsRenderer } from "./renderers/amigos";
import { vinculosamistad } from "/endpoints/vinculosamistad";
import {vinculosamistadAPI_auto} from "/api/vinculosamistadAPI_auto";

function main() {

    let amigoForm = document.getElementById("userId");
    amigoForm.onsubmit = handleCreateAmigo;
    loadUsers();
}

async function handleCreateAmigo(event) {
    event.preventDefault();
    let form = event.target;
    form.reset();

    let formData = new FormData(form);
    try {
        await vinculosamistadAPI_auto.create(formData);
        loadItems();
    } catch (err) {
        console.error(err);
    }
}

async function loadUsers() {
    try {
        let amigo = await vinculosamistad.getAll();
        if (fechaAceptacion != null & fechaRevocacion == null) {
            let container = document.getElementById(amigo);
            container.append(itemsRenderer.asCard);
        }
    } catch (err) {
        console.log(err);
    }
}

document.addEventListener("DOMContentLoaded", main);