"use strict";

const domain = "https://jsonplaceholder.typicode.com";

async function displayUsers(){
    let users = null;
    
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => users = json);

    let select = document.querySelector("#users");

    for(let user of users) {
        let option = document.createElement("option");
        option.value = user.id;
        option.innerHTML = user.name;

        select.appendChild(option);
    }
}

$(document).ready(async function() {
    displayUsers();
    $("#view_list").click( async function () {
        document.querySelector("#list").innerHTML = "";

        let todoItems = null;
        await fetch('https://jsonplaceholder.typicode.com/todos/?userId=' + $("#users").val())
        .then((response) => response.json())
        .then((json) => todoItems = json);

        let list = document.getElementById("list");

        let table = document.createElement("table");
        let headerRow = document.createElement("tr");

        let itemTitle = document.createElement("th");
        itemTitle.textContent = "ToDo Item";

        let completedTitle = document.createElement("th");
        completedTitle.textContent = "Completed";

        headerRow.appendChild(itemTitle);
        headerRow.appendChild(completedTitle);

        table.appendChild(headerRow);

        for(let todoItem of todoItems) {
            let tableRow = document.createElement("tr");
            let item = document.createElement("td");
            let completed = document.createElement("td");

            item.textContent = todoItem.title;
            completed.textContent = todoItem.completed;

            tableRow.appendChild(item);
            tableRow.appendChild(completed);

            table.appendChild(tableRow);
        }

        list.appendChild(table);
    });
});