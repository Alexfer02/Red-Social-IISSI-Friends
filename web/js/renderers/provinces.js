"use strict";
import { parseHTML} from "/js/utils/parseHTML.js";

const provincesRenderer = {
    asSelect: function(pronvincesList){
        let html=`<select name="provinceId" id="provinceId-input" class='form-select'></select>`;
        let select=parseHTML(html);

        for(let province of pronvincesList){
            let option_html=`<option value="${province.provinceId}">${province.provinceName}</option>`;
            let option=parseHTML(option_html);
            select.append(option);
        }

        return select;
    },
};

export{ provincesRenderer };