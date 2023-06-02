function Register() {
    const firstName = document.getElementById("firstName").value
    const numberPhone = document.getElementById("numberPhone").value
    const password = document.getElementById("password").value
    if (firstName.length == 0 || numberPhone.length == 0 || password == 0) {
        document.getElementById("btn-register").disabled = true
    } else {
        document.getElementById("btn-register").disabled = false
    }
}
Register() 