"use strict";
import { provincesAPI_auto} from "/js/API/_provinces.js";
import { provincesRenderer} from "/js/renderers/provinces.js";
import{ sessionManager} from "/js/utils/session.js";
import{ preferenciasAPI_auto} from"/js/api/_preferencias.js";
function main(){
    
    loadProvinces();
    let preferenciasForm= document.getElementById("preferences-form");
    preferenciasForm.onsubmit = handleSubmitPreferencias;
    
}



function handleSubmitPreferencias(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    sendPreferencias(formData);

}

async function sendPreferencias(formData){
    try{

        formData.append("userId", sessionManager.getLoggedId());
        let dataPreferences = await preferenciasAPI_auto.create(formData);
        window.location.href = "profile.html";
    }catch(err){
        console.error(err);
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