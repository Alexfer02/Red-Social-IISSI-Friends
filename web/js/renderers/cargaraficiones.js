"use strict";
import { parseHTML } from '/js/utils/parseHTML.js';

const aficionRenderer = {

    asCardGroup: function (aficionesList) {
        let html = ` <div class="row" id="item-cards"></div>`;
        let cardsContainer = parseHTML(html);

        for (let aficion of aficionesList) {
            let card = this.asCard(aficion);
            cardsContainer.append(card);
        }

        return cardsContainer;
    },

    asCard: function (hobbie) {
        let html = ` <div class="col-md-auto">
        <div class="card p-2" id="card#${hobbie.userHobbyId}">
            <div class="row text-center">
                <div class="col-auto">
                    <h4>${hobbie.Hobbiesname}</h4>
                </div>

            </div>
            <div class="row">
            <div class="col">
                <button class="btn-delete-item">
                BORRAR
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </div> 
        </div>
    </div>`;
        let card = parseHTML(html);
        return card
    },


};

export { aficionRenderer };