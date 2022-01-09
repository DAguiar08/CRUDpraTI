function Adicionar() {
    let name = document.getElementById('Nome').value;
    let email = document.getElementById('Email').value;
    let date = document.getElementById('DdN').value;
    let number = document.getElementById('Nota').value;
    let table = document.getElementById("Cadastrado");

    let tableSize = table.rows.length; 
    let row = table.insertRow(tableSize); 
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    row.id = tableSize;

    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = date;
    cell5.innerHTML = number;

    document.getElementById('Nome').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('DdN').value = "";
    document.getElementById('Nota').value = "";

    if (tableSize > 0) {
        alert('Cadastrado');
    }
    
    return false;
}
