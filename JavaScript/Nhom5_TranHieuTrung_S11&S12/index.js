function btnSubmit() {
    const studentID = document.getElementById("studentID").value;
    const studentName = document.getElementById("student-name").value;
    const studentAge = document.getElementById("student-age").value;
    const studentYear = new Date(studentAge).getFullYear();
    const currentYear = new Date().getFullYear();
    const studentNumberPhone = document.getElementById("student-phone").value;
    //validate student ID
    if (studentID == 0) {
        document.getElementById("validateID").innerHTML = "ID not null"
    } else {
        document.getElementById("validateID").innerHTML = ""
    }

    //validate student name
    if (studentName.length < 5 || studentName.length > 15) {
        document.getElementById("validate-text").innerHTML = "Name student min value length 5, max value length 15"
    } else {
        document.getElementById("validate-text").innerHTML = ""
    }

    //validate date
    if (currentYear - studentYear < 18) {
        document.getElementById("validate-date").innerHTML = "age of student must be bigger than 18 years old"
    } else {
        document.getElementById("validate-date").innerHTML = ""
    }

    //validate number phone
    if (studentNumberPhone.length == 10) {
        document.getElementById("validate-phone").innerHTML = ""
    } else {
        document.getElementById("validate-phone").innerHTML = "length number phone is 10"
    }
}