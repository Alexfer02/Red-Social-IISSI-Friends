"use strict";

import { sessionManager } from "/js/utils/session.js";

function main() {
    showUser();
    addLogoutHandler();
    hideHeaderOptions();
    editarDatos();
}
function showUser() {
    let title = document.getElementById("navbar-title");
    let text;
    if (sessionManager.isLogged()) {
        let username = sessionManager.getLoggedUser().username;
        text = "Hola, @" + username;
    } else {
        text = "Invitado";
    }
    title.textContent = text;
}
function addLogoutHandler() {
    let logoutButton = document.getElementById("navbar-logout");
    logoutButton.onclick = function () {
    sessionManager.logout();
    window.location.href = "index.html";
    };
}



function hideHeaderOptions() {
        let headerRegister = document.getElementById("navbar-register");
        let headerLogin = document.getElementById("navbar-login");
        let headerLogout = document.getElementById("navbar-logout");
        let headerRecent = document.getElementById("navbar-recent");
        let headerUpdate = document.getElementById("nav-update");
        let headerCreate = document.getElementById("navbar-create");
        let hearderAficiones=document.getElementById("navbar-aficiones");
        if (sessionManager.isLogged()) {
        headerRegister.style.display = "none";
        headerLogin.style.display = "none";
        } else {
        headerRecent.style.display = "none";
        headerCreate.style.display = "none";
        headerLogout.style.display = "none";
        headerUpdate.style.display="none";
        hearderAficiones.style.display="none";
        }
}
        
document.addEventListener("DOMContentLoaded", main);