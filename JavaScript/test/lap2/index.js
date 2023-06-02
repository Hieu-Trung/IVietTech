$(document).ready(function () {
    $.getJSON("students.json", function (result) {
        for (let i = 0; i < result.length; i++) {
            table = `<tr>
            <td>${result[i].id}</td>
            <td>${result[i].name}</td>
            <td>${result[i].birthday}</td>
            <td>${result[i].phoneNumber}</td>
            </tr>`
            $("tbody").append(table)
            console.log(result);
        }
    });
});
function validating(){
    const id = document.getElementById("ID").value;
    const name = document.getElementById("Name").value;
    const birthday = document.getElementById("Birthday").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if(id.length == 0){
        document.getElementById("validating-id").innerHTML = "gdgd"
    }
}