const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const cityInput = document.querySelector("#city")
const localInput = document.querySelector("#local")
const mensagemInput= document.querySelector("#mensagem")

form.addEventListener("submit", (event) => {

event.preventDefault();

if(nameInput.value === "") {
    alert("Preencha o seu nome")
    return;
}

if(emailInput.value === "") {
    alert("Preencha o seu e-mail")
    return;
}

if(cityInput.value === "") {
    alert("Preencha a cidade")
    return;
}

if(localInput.value === "") {
    alert("Preecha o local")
    return;
}

if(mensagemInput.value === "") {
    alert("Preencha a mensagem")
    return;
}


form.submit();
})