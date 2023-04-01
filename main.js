const openModal = document.querySelector('.openModal')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')
const checkPass = document.querySelector('.checkPass')
const temp = document.getElementById("pass")
const input = document.querySelector("input")
const mail = document.getElementById("mail")
const error = document.getElementById("error")
const form = document.getElementById("form")
const pass = document.getElementById("pass")

openModal.addEventListener('click', () =>{
    modal.showModal()
})

closeModal.addEventListener('click', () =>{
    modal.close()
})

modal.addEventListener('click', (e) =>{
    if(e.target === modal) modal.close()
})

checkPass.addEventListener('pointerdown', () =>{
    temp.type = "text"
})
checkPass.addEventListener('pointerup', () =>{
    temp.type = "password"
})


mail.addEventListener("blur", () => {
    if (mail.validity.typeMismatch){
        error.textContent = "Почта введена некорректно!"
        mail.setCustomValidity("Ошибка!")
    }

    else if (mail.validity.valueMissing){
        error.textContent = "Пожалуйста, введите значения"
        mail.setCustomValidity("Ошибка!")
    }
    else{
        error.textContent = ""
        mail.setCustomValidity("")
    }
})

pass.addEventListener("blur", () => {
    if (pass.validity.tooShort) {
        error.textContent = "Должно быть минимум 6 символов!"
        pass.setCustomValidity("Ошибка!")
    }
    else if (pass.validity.valueMissing){
        error.textContent = "Пропущены значения!"
        pass.setCustomValidity("Ошибка!")
    }
    else
    {
        error.textContent = ""
        pass.setCustomValidity("")
    }
}) 

form.addEventListener("submit", (e) =>{
    console.table({email: mail.value, password: pass.value});
    e.preventDefault()
})