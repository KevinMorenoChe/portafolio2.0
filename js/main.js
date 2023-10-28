document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('form')
    const name1 = document.getElementById('inputName')
    const email = document.getElementById('inputEmail')
    const subject = document.getElementById('inputSubject')
    const message = document.getElementById('textareaMessage')
    const btn = document.getElementById('button')
    const warnings = document.getElementById('warning')
    
    
    form.addEventListener("submit", stop)
    
    
    
    function stop(e){
        
        let entrar = true;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        warnings.innerHTML = ``
        
        if(name1.value.length == ''){
            warnings.innerHTML += `<p>X No has escrito ningun nombre</p> <br>`
            entrar = false;
            
        }else if(name1.value.length < 3){
            warnings.innerHTML += `<p>X El nombre es muy corto</p> <br>`
        entrar = false;
    }
    
    if(!regexEmail.test(email.value)){
        warnings.innerHTML += `<p>X El email no es valido</p> <br>`
        entrar = false;
    }
    if(message.value == ''){
        warnings.innerHTML += `<p>X No has escrito ningun mensaje</p> <br>`
        entrar = false;
        
    }
    if(entrar == true){
        warnings.innerHTML += `<p class="contact__passed">✔ lMensaje Enviado</p> <br>`
 
    }else{
        e.preventDefault();
        
    }
}

setTimeout(() => {
    form.reset();
  }, 100);

});