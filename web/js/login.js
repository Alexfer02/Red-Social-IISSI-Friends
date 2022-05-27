"use strict";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";
import { userValidator } from "/js/validators/users.js";
import { messageRenderer } from "/js/renderers/messages.js";
import{usersAPI_auto} from "/js/api/_users.js";

function main() {
    let loginForm = document.getElementById("form-login");
    loginForm.onsubmit = handleLoginSubmit;
}

async function handleLoginSubmit(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let errorsDiv = document.getElementById("errors");
    errorsDiv.innerHTML = "";

    let errors = userValidator.validateLogin(formData);

    if (errors.length === 0) {
        let loginData = await authAPI.login(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;
        sessionManager.login(sessionToken, loggedUser);
        let userid=sessionManager.getLoggedId();
        let usuario=usersAPI_auto.getById(userid);
        if(usuario.withdrawalDate!=null){
            errors.push("El perfil esta dado de baja");
            for (let err of errors) {
                messageRenderer.showErrorAsAlert(err);
            }
            sessionManager.logout();
        }else{
            window.location.href = "profile.html?userId="+userid;
        }

       
        

    } else {
        for (let err of errors) {
            messageRenderer.showErrorAsAlert(err);
        }
    }
}

document.addEventListener("DOMContentLoaded", main);