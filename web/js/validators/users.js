"use strict";

const userValidator = {

    validateLogin: function (formData) {
        let errors = [];

        let username = formData.get("username");
        let password = formData.get("password");

        if (username.length <= 3) {
            errors.push("The username must have more than 3 character");
        }

        if (password.length <= 1) {
            errors.push("The password must have more than 1 character");
        }

        return errors;
    },

    validateRegister: function (formData) {
        let errors = [];
        // Inputs del usuario
        let username = formData.get("username");
        let password = formData.get("password");
        let height = formData.get("height");
        let wheight = formData.get("wheight");
        let bio= formData.get("bio");
        let address=formData.get("address");
        let postcode=formData.get("postcodeId");
        

        if (username.length < 3) {
            errors.push("El nombre de usuario necesita tener más de 3 carácteres");
        }

        if (password.toLowerCase().includes(username.toLowerCase())) {
            errors.push("La contraseña no puede contener el nombre de usuario");
        }

        if(password.length<3){
            errors.push("La contaseña es demasiado corta");
        }

        if(bio.length<3){
            errors.push("La biografía es demasiado corta");
        }


        if(height<40){
            errors.push("La altura tiene que ser superior a 40cm")
        }

        if(wheight<30){
            errors.push("El peso debe ser superior a 30kg")
        }

        if(address.length==0){
            errors.push("La dirección no puede ser nula");
        }

        if(postcode.length!=5){
            errors.push("El codigo postal tiene que tener 5 digitos");  
        }

        return errors;
    },

};

export { userValidator };