"use strict";

import{ userhobbiesAPI_auto } from "/js/api/_userhobbies.js"; 
import{ aficionRenderer } from "/js/renderers/cargaraficiones.js";    
import{ hobbiesAPI_auto } from "/js/api/_hobbies.js";   
import{ hobbiesRenderer } from "/js/renderers/cargarHobbie.js";
import{ usuarioAficionesAPI_auto} from "/js/api/usuarioAficiones.js";
import{ sessionManager} from "/js/utils/session.js";


function main(){
    let hobbieform = document.getElementById("create-hobbie");
    hobbieform.onsubmit=handleCreateHobbie;
    loadaficiones();
    loadHobbies();
}

function addEventHandlers(){
    let deleteButtons = document.querySelectorAll(".btn-delete-item");
    for(let btn of deleteButtons){
        btn.onclick= handleDeleteItem;
    }
}

async function handleDeleteItem(event){
    let btn = event.target;
    let card = btn.closest(".card");
    let id=card.id.replace("card#","");

    try{
        await userhobbiesAPI_auto.delete(id);
        loadaficiones();
    }catch(err){
        console.error(err);
    }
}

async function handleCreateHobbie(event){
    event.preventDefault();
    let form= event.target;
    let formData = new FormData(form);
    formData.append("userId", sessionManager.getLoggedId());


    try{
        await userhobbiesAPI_auto.create(formData);
        loadaficiones();
    }catch (err){
        console.error(err);
    }
}

async function loadHobbies(){
    try{
        let hobbies= await hobbiesAPI_auto.getAll();
        let select =  hobbiesRenderer.asSelect(hobbies);
        let container =document.getElementById("select-container");
        container.prepend(select);
    }catch (err){
        console.error(err);
    }
};


 async function loadaficiones(){

    try{
        let aficiones = await usuarioAficionesAPI_auto.getByUserId(sessionManager.getLoggedId());
        let cards = aficionRenderer.asCardGroup(aficiones);
        let container = document.getElementById("items-container");
        container.innerHTML="";
        container.append(cards);
        addEventHandlers();
    }catch (err){
        console.error(err);
    }

}






document.addEventListener("DOMContentLoaded", main);