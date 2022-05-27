"use strict";
import{ parseHTML} from "/js/utils/parseHTML.js";

const hobbiesRenderer = {
    asSelect: function( hobbieList){
        let html = `<select name="hobbyId" id="HobbyId-input"
        class="form-select" placeholder="AFICIÓN">
        </select>`;
        let select= parseHTML(html);

        for( let hobbie of hobbieList){
            let option_html=`<option value="${hobbie.hobbyId}">${hobbie.name}</option>`;
            let option=parseHTML(option_html);
            select.append(option);
        }

        return select;
    },
};

export{ hobbiesRenderer};