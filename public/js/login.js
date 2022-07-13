console.log("Js Login is Linked!!")

window.onload = function(){
    let form = document.querySelector("#formLogin")
    let usuario =  document.querySelector("#userName")
    let password =  document.querySelector("#password")
    let emailSlot =  document.querySelector(".email")
    let passwordSlot =  document.querySelector(".password")

    let usuarioError =  document.querySelector(".nameError")
    let passwordError =  document.querySelector(".passwordError")
    let errorsFront = {}

    function validateField(selector, errorSelector ){
        console.log("validating from function")
        selector.classList.remove("nonValidInput")
        selector.classList.add("validInput")
        errorSelector.innerHTML = ""
        console.log("errorsFront", errorsFront)
    }
    function rejectField(selector, errorsFrontField ){
        selector.classList.remove("validInput")
        selector.classList.add("nonValidInput")
        errorsFront[errorsFrontField] = "Error"
        console.log("errorsFront", errorsFront)
    }

    usuario.addEventListener('keyup',(event)=>{
        if((usuario.value.length  >= 6 &&
            usuario.value.includes(".com") &&
            usuario.value.includes("@")) ){
                validateField(emailSlot, usuarioError)
                delete errorsFront.usuario
        }else{
            emailSlot.classList.remove("validInput")
        }
    })
    usuario.addEventListener('blur',(event)=>{
        if(!(usuario.value.length  >= 6 &&
            usuario.value.includes(".com") &&
            usuario.value.includes("@"))){
            rejectField(emailSlot, "usuario")
            usuarioError.innerHTML = "The email address must be valid"
        }else{
            emailSlot.classList.add("validInput")
        }
    })
    usuario.addEventListener('focus',(event)=>{
        emailSlot.classList.remove("validInput", "nonValidInput")
    })
    password.addEventListener('keyup',(event)=>{
        if  ((password.value.length >= 8 &&
            (new RegExp(/[A-Z]/)).test(password.value) &&
            (new RegExp(/[0-9]/)).test(password.value) &&
            (new RegExp(/[¡¿?!&#%]/)).test(password.value)) ){
            // Valid Password
            validateField(passwordSlot, passwordError)
            delete errorsFront.password
        }else{
            passwordSlot.classList.remove("validInput")
        }
    })
    password.addEventListener('blur',(event)=>{
        if (password.value.length >= 8 &&
            (new RegExp(/[A-Z]/)).test(password.value) &&
            (new RegExp(/[0-9]/)).test(password.value) &&
            (new RegExp(/[¡¿?!&#%]/)).test(password.value)){
                validateField(passwordSlot, passwordError)
        }else{
            //UNCOMMENT FOR DEPLOY!!!
            rejectField(passwordSlot, "password") 
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
        passwordSlot.classList.remove("validInput", "nonValidInput")
    })

    form.addEventListener('submit',(event)=>{
        let err = false
        //fields validations (Esthetic)
        if (usuario.value.length == 0){
            emailSlot.classList.add("nonValidInput")
        }
        if (password.value.length == 0){
            passwordSlot.classList.add("nonValidInput")
        }
        //fields validations (not null)
        if (Object.keys(errorsFront).length != 0 ||
            usuario.value.length == 0 ||
            password.value.length == 0
        ){
            err=true
        }

        //fields validations (user in "DB")   
        userWhiteList = JSON.parse(localStorage.getItem('barclaysUserData'));
        console.log("userWhite: ", userWhiteList)
        if(userWhiteList==null){                                                          //no user registered yet
            event.preventDefault()
        }else{   
            let userSearch = userWhiteList.find((user) => user.email==usuario.value)
            if (userSearch == null || usuario.value != userSearch.email || password.value != userSearch.password){
                console.log(userSearch == null)
                console.log(usuario.value != userSearch.email)
                console.log(password.value != userSearch.pass)
                err=true
            }
        }
        if (err==true){
            alert("Usuario o contraseña invalida")
            event.preventDefault()
        }
    })
}
