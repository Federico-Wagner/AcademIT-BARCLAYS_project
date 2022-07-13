console.log("Js Register is Linked!!!")

window.onload = function(){
    let form = document.querySelector("#formRegister")
    let firstName =  document.querySelector("#firstName")
    let lastName =  document.querySelector("#lastName")
    let email =  document.querySelector("#email")
    let password =  document.querySelector("#password")
    let passwordReapeat =  document.querySelector("#passwordRepeat")

    let userRow =  document.querySelector(".userRow")
    let emailRow = document.querySelector(".email")
    let passwordRow = document.querySelector(".password")
    let passwordRepeatRow = document.querySelector(".passwordRepeat")


    let firstNameError =  document.querySelector(".firstNameError")
    let lastNameError =  document.querySelector(".lastNamerError")
    let emailError =  document.querySelector(".emailError")
    let passwordError =  document.querySelector(".passwordError")
    let passwordReapeatError =  document.querySelector(".passwordRepeatError")
    let errorsFront = {}

    function validateField(selector, errorMessage ){
        selector.classList.remove("nonValidInput")
        selector.classList.add("validInput")
        errorMessage.innerHTML = ""
        console.log("errorsFront", errorsFront)
    }
    function rejectField(selector, errorsFrontField ){
        selector.classList.remove("validInput")
        selector.classList.add("nonValidInput")
        errorsFront[errorsFrontField] = "Error"
        console.log("errorsFront", errorsFront)
    }

    firstName.addEventListener('keyup',(event)=>{
        if ((firstName.value.length  >= 3) && (lastName.value.length  >= 3)){
            validateField(userRow, firstNameError)
            delete errorsFront.firstName
        }else if(firstName.value.length  >= 3){
            firstNameError.innerHTML = ""
            delete errorsFront.firstName
        }else{
            userRow.classList.remove("validInput")
        }
    })
    lastName.addEventListener('keyup',(event)=>{
        if ((firstName.value.length  >= 3) && (lastName.value.length  >= 3)){
            validateField(userRow, lastNameError)
            delete errorsFront.lastName
        }else if(lastName.value.length  >= 3){
            lastNameError.innerHTML = ""
            delete errorsFront.lastName
        }else{
            userRow.classList.remove("validInput")
        }
    })
    firstName.addEventListener('blur',(event)=>{
        if (!(firstName.value.length  >= 3)){
            rejectField(userRow, "firstName")
            firstNameError.innerHTML = "El Nombre debe poseer al menos 3 caracteres"
        }else{
            userRow.classList.add("validInput")
        }
    })
    lastName.addEventListener('blur',(event)=>{
        if (!(lastName.value.length  >= 3)){
            rejectField(userRow, "lastName")
            lastNameError.innerHTML = "El apellido debe poseer al menos 3 caracteres"
        }else{
            userRow.classList.add("validInput")
        }
    })
    firstName.addEventListener('focus',(event)=>{
        userRow.classList.remove("validInput", "nonValidInput")
    })
    lastName.addEventListener('focus',(event)=>{
        userRow.classList.remove("validInput", "nonValidInput")
    })

    email.addEventListener('keyup',(event)=>{
        if ((email.value.includes("@") && email.value.includes(".com") && email.value.length > 6 )){
            validateField(emailRow, emailError)
            delete errorsFront.email
        }else{
            email.classList.remove("validInput")
        }
    })
    email.addEventListener('blur',(event)=>{
        if (!(email.value.includes("@") && email.value.includes(".com") && email.value.length > 6 )){
            rejectField(emailRow, "email")
            emailError.innerHTML = "El email ingresado no es valido"
        }else{
            validateField(emailRow, emailError)
        }
    })
    email.addEventListener('focus',(event)=>{
        emailRow.classList.remove("validInput", "nonValidInput")
    })

    password.addEventListener('keyup',(event)=>{
        if  ((password.value.length >= 8 &&
            (new RegExp(/[A-Z]/)).test(password.value) &&
            (new RegExp(/[0-9]/)).test(password.value) &&
            (new RegExp(/[¡¿?!&#%]/)).test(password.value)) ){
            // Valid Password
            validateField(passwordRow, passwordError)
            delete errorsFront.password
        }else{
            passwordRow.classList.remove("validInput")
        }
    })
    password.addEventListener('blur',(event)=>{
        if (password.value.length >= 8 &&
            (new RegExp(/[A-Z]/)).test(password.value) &&
            (new RegExp(/[0-9]/)).test(password.value) &&
            (new RegExp(/[¡¿?!&#%]/)).test(password.value)){
                validateField(passwordRow, passwordError)
        }else{
            rejectField(passwordRow, "password")
            passwordError.innerHTML =
            "<div>" + 
            "<p>The password must contain:</p>" + 
            "<ul>" +
            "<li>One numeric value</li>" + 
            "<li>One capital letter</li>" +
            "<li>One special character (# $ % &)</li>" +
            "<li>8 characters long</li>"
            "</ul>"+
            "</div>"
        }
    })    
    password.addEventListener('focus',(event)=>{
        passwordRow.classList.remove("validInput", "nonValidInput")
    })

    passwordReapeat.addEventListener('keyup',(event)=>{
        if (passwordReapeat.value == password.value && passwordReapeat.value.length != 0){
            //Valid passwordReapeat
            validateField(passwordRepeatRow, passwordReapeatError)
        }
    })
    passwordReapeat.addEventListener('blur',(event)=>{
        if (passwordReapeat.value == password.value && passwordReapeat.value.length != 0){
            delete errorsFront.passwordReapeat
            validateField(passwordRepeatRow, passwordReapeatError)
        }else{
            passwordReapeatError.innerHTML = "Las contraseñas ingresadas no coinciden"
            rejectField(passwordRepeatRow, "passwordReapeat")
        }
    })
    passwordReapeat.addEventListener('focus',(event)=>{
        passwordRepeatRow.classList.remove("validInput", "nonValidInput")
    })
    
    /*
    localStorage.clear();
    let userWhiteList=[{
        email: "fede@asj.com",
        pass:"123456#A" 
    },{
        email: "pepito@gmail.com",
        pass:"123456#A" 
    },{
        email: "camila@gmail.com",
        pass:"123456#A" 
    }]
    localStorage.setItem('barclaysUserData', JSON.stringify(userWhiteList));
    userWhiteList = JSON.parse(localStorage.getItem('barclaysUserData'));


    localStorage.setItem('barclaysUserData', JSON.stringify(userWhiteList));
    userWhiteList = JSON.parse(localStorage.getItem('barclaysUserData'));
    console.log(userWhiteList)
    */
    //localStorage.removeItem(barclaysUserData');
    //localStorage.clear()

    // let userWhiteList=[{
    //     email: "fede@asj.com",
    //     pass:"123456#A" 
    // },{
    //     email: "pepito@gmail.com",
    //     pass:"123456#A" 
    // },{
    //     email: "camila@gmail.com",
    //     pass:"123456#A" 
    // }]

    // localStorage.setItem('barclaysUserData', JSON.stringify(userWhiteList));



    form.addEventListener('submit',(event)=>{
        //fields validations
        if (firstName.value.length == 0){
            userRow.classList.add("nonValidInput")
        }
        if (lastName.value.length == 0){
            userRow.classList.add("nonValidInput")
        }
        if (email.value.length == 0){
            email.classList.add("nonValidInput")
        }
        if (password.value.length == 0){
            password.classList.add("nonValidInput")
        }
        if (passwordReapeat.value.length == 0){
            passwordReapeat.classList.add("nonValidInput")
        }

        if (Object.keys(errorsFront).length != 0 ||
            firstName.value.length == 0 ||
            lastName.value.length == 0 ||
            email.value.length == 0 ||
            password.value.length == 0 ||
            passwordReapeat.value.length == 0
        ){  
            //presence of errorsFront
            event.preventDefault()
            alert("Algunos campos poseen errores o estan incompletos")
        }else{
            //Hardcoded local DB
            let newUser={
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: password.value
            }
            userWhiteList = JSON.parse(localStorage.getItem('barclaysUserData'));
            if(userWhiteList==null){
                userWhiteList=[]
            }
            userWhiteList.push(newUser)
            localStorage.setItem('barclaysUserData', JSON.stringify(userWhiteList));
        }
    })
}
