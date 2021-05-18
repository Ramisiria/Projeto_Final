const btn = document.querySelector("#send");
const name = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");


btn.addEventListener("click", function(e){
    e.preventDefault();
    let registro = {name, telefone, email,mensagem};

    
console.log(registro);
    

    const value = name.value;
    // console.log(value);
});