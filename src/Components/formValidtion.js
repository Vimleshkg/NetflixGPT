export const formValidation = ( email, password) =>{

   const emailRegex =/^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
   const passRegex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
   

    if(!emailRegex)
     return "Email is Invalid";

    if(!passRegex)
    return "Password is Invalid";

    return null;

}