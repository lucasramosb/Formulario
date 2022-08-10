// Seletores para capturar os inputs
const userInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#password");
const confirmSenhaInput = document.querySelector("#password-confirmation");

const mensError = document.querySelector(".mensErro");

const ierror = document.querySelector("i .fa-exclamation-circle");
const isuccess = document.querySelector("i .fa-check-circle");

const submitButton = document.querySelector("#submit-button");

// ---------------------

// Inserção de evento ao input button com uma função aninoma para veriificar se os inputs estão vazio e adicionar uma class error
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const userValue = userInput.value;
    const emailValue = emailInput.value;
    const senhaValue = senhaInput.value;
    const confirmSenhaValue = confirmSenhaInput.value;

    if (userValue === "" || emailValue === "" || senhaValue === "" ||   confirmSenhaValue === "") {
        mensError.classList = "error";
        // ierror.classList = "error"
        return;
    }

})


