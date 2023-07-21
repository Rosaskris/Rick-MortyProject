


export default function validations(userData){
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!userData.email) {
        errors.email = 'Se requiere un nombre';

    }if (!regexEmail.test(userData.email)) {
        errors.email = 'Debe ser un correo electrónico';
    } 
    if (userData.email.length>35) {
        errors.email = 'El usuario no debe tener mas de 35 caracteres';}

    if (!userData.password.includes(1-0)) {
        errors.password = 'Se requiere al menos un número';
    }
    if (userData.password.length<6 || userData.password.length>10) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';}

    return errors;
}