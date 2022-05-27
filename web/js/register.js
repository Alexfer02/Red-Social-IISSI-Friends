"use strict";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";

import { provincesAPI_auto} from "/js/API/_provinces.js";
import { provincesRenderer} from "/js/renderers/provinces.js";

function main() {
    let registerForm = document.getElementById("register-form");
    registerForm.onsubmit = handleSubmitRegister;
    loadProvinces();
}

function handleSubmitRegister(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let errors = userValidator.validateRegister(formData);
    if (errors.length > 0) {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";
        for (let error of errors) {
            messageRenderer.showErrorAsAlert(error);
        }
    } else {
        sendRegister(formData);
    }
}

async function sendRegister(formData) {
    try {
        let loginData = await authAPI.register(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;
        sessionManager.login(sessionToken, loggedUser);
        let userid=sessionManager.getLoggedId();
        window.location.href = "profile.html?userId="+userid;
    } catch (err) {
        messageRenderer.showErrorAsAlert("Error registering a new user", err);
    }
}

async function loadProvinces(){
    try{
        let provinces= await provincesAPI_auto.getAll();
        let select =  provincesRenderer.asSelect(provinces);
        let container =document.getElementById("province-select-container");
        container.prepend(select);
    }catch (err){
        console.error(err);
    }
};

document.addEventListener("DOMContentLoaded", main);
