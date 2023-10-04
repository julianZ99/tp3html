
document.getElementById("myId").innerText = 'Hello World';

var elements = document.getElementsByClassName("test");
var first = elements[0];
first.innerText = 'Hello World';

function insertRow() {
    let table = document.querySelector('.myTable');
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    c1.innerText = "new"
    c2.innerText = "row"
}

function deleteRow() {
    let table = document.querySelector('.myTable');
    if (table.tBodies[0].rows.length > 1) {
        // Delete the last row
        table.tBodies[0].deleteRow(-1);
    } else {
        console.log('Table is empty. No rows to delete.');
    }
}

function highlight() {
    const spanElements = document.querySelectorAll('.myClass');
    spanElements.forEach((spanElement, index) => {
        spanElement.classList.add('highlighted-text');
        spanElement.classList.remove('myClass');
    });

}