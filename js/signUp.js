
var boxes=document.querySelectorAll('.box')
boxes.forEach(box=>{
    box.addEventListener('click',function(){
        box.children[0].classList.add('fade-in')
        box.classList.remove('pt-3')
        box.classList.add('pt-1')
        box.children[1].classList.remove('hidden')
    })
})

var usernameRegex=/^[a-zA-Z][a-zA-Z0-9]{3,}$/
var usernameDanger=document.querySelector('#username-danger')
var inputUsername=document.querySelector('#input-username')

inputUsername.addEventListener('input',function(event){
    if(!usernameRegex.test(inputUsername.value)){
        usernameDanger.classList.add('block')
        usernameDanger.classList.remove('hidden')
    }else{
        usernameDanger.classList.add('hidden')
        usernameDanger.classList.remove('block')
    }
})

var emailRegex=/^[a-zA-Z][a-zA-Z0-9]{3,}@(gmail.com|yahoo.com)$/
var emailDanger=document.querySelector('#email-danger')
var inputEmail=document.querySelector('#input-email')

inputEmail.addEventListener('input',function(){
    if(!emailRegex.test(inputEmail.value)){
        emailDanger.classList.add('block')
        emailDanger.classList.remove('hidden')
    }else{
        emailDanger.classList.add('hidden')
        emailDanger.classList.remove('block')
    }
})

var passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{9,}$/
var passwordDanger=document.querySelector('#password-danger')
var inputPassword=document.querySelector('#input-password')

inputPassword.addEventListener('input',function(){
    if(!passwordRegex.test(inputPassword.value)){
        passwordDanger.classList.add('block')
        passwordDanger.classList.remove('hidden')
    }else{
        passwordDanger.classList.add('hidden')
        passwordDanger.classList.remove('block')
    }
})
