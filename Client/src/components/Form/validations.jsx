


export default function validations(userData){
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!userData.email) {
        errors.email = 'Name required';

    }if (!regexEmail.test(userData.email)) {
        errors.email = 'Must be a valid e-mail';
    } 
    if (userData.email.length>35) {
        errors.email = 'User cannot have more than 35 characters';}

    if (!userData.password.includes(1-0)) {
        errors.password = 'At least 1 number is required';
    }
    if (userData.password.length<6 || userData.password.length>10) {
        errors.password = 'Password should have from 6 to 10 characters';}

    return errors;
}