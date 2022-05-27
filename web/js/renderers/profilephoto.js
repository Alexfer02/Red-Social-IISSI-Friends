"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";


const profileRenderer = {

    asBiography: function (dato) {
        let html = 
        `<div class="profile-container">
        <div class="perfil">
        <img class="perfil-foto" src="${dato.avatarURL}" />
        <div class="titulo">
          <h1>${dato.username}</h1>
          <h3>${dato.bio}</h3>
        </div>
                </div>
                </div>`;

        let profile = parseHTML(html);
        return profile;
    },
}

export{ profileRenderer};