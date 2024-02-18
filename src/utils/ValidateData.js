export const validateFormDataSignUp=(name, email, password)=>{
    

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isName=/^[A-Za-z ]+$/.test(name);
    if(!isName)
    return "Invalid Name";
    if(!isEmailValid)
     return "Invalid Email id";
    if(!isPasswordValid)
    return "Invalid Password ";
return null;
}
export const validateFormDataSIgnIN=(email, password)=>{
    

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!isEmailValid)
     return "Invalid Email id";
    if(!isPasswordValid)
    return "Invalid Password ";
return null;
}
