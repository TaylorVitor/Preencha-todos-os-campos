

let formulario = document.querySelector("#formCadastro")

formulario.onsubmit = (event) => {
    event.preventDefault()

    let enviarForm = false

    let inputName = document.forms["formCadastro"]["nome"]

    if(!inputName.value) {
        enviarForm = true
        inputName.classList.add("inputErro")

        let span = inputName.nextSibling.nextSibling
        span.innerText = "Campo nome é obrigatório"

    }   else {
        inputName.classList.remove("inputErro")

        let span = inputName.nextSibling.nextSibling
        span.innerText = ""
    }

    let inputEmail = document.forms["formCadastro"]["email"]

    if(!inputEmail.value) {
        enviarForm = true
        inputEmail.classList.add("inputErro")

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = "Campo email é obrigatório"

    }   else {
        inputEmail.classList.remove("inputErro")

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ""
    }

    let inputCpf = document.forms["formCadastro"]["cpf"]

    if(!inputCpf.value) {
        enviarForm = true
        inputCpf.classList.add("inputErro")

        let span = inputCpf.nextSibling.nextSibling
        span.innerText = "Campo CPF é obrigatório"

    }   else {
        inputCpf.classList.remove("inputErro")

        let span = inputCpf.nextSibling.nextSibling
        span.innerText = ""
    }

    if(!enviarForm) {
        formulario.submit()
    }

}