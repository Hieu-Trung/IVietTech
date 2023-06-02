function btnSubmit() {
    let firstName = document.getElementById("firstName").value;
    let age = document.getElementById("age").value;
    // check length fristName
    if (firstName.length == 0) {
        document.getElementById("validate-firstName").innerHTML = "&#9888; firstName is a required field"
    } else {
    }
    if (age.length == 0) {
        document.getElementById("validate-age").innerHTML = "&#9888; age must be a `number` type, but the final value was: `NaN` (cast from the value `NaN`)."
    } else {

    }

    console.log(firstName);
}

