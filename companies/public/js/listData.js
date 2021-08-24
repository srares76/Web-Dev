const buttons = document.getElementsByTagName('button');
const radioCompany = document.getElementById('radio-company');
const radioUser = document.getElementById('radio-user');
const ul = document.getElementById('data-list');

function deleteCompany(company) {
    const request = new XMLHttpRequest();
    request.onload = function() {
        try {
            console.log(this.response);
            location.reload();
        } catch {
            console.log("Error: " + request.status);
        }
    }

    const url = "http://127.0.0.1/deletecompany?company=";
    request.open("GET", url + company);
    request.send();
}

function deleteUser(email) {
    const request = new XMLHttpRequest();
    request.onload = function() {
        try {
            console.log(this.response);
            location.reload();
        } catch {
            console.log("Error: " + request.status);
        }
    }

    const url = "http://127.0.0.1/deleteuser?user=";
    request.open("GET", url + email);
    request.send();
}

async function fetchData(type) {
    const url = "http://127.0.0.1/listdata?type=";
    try {
        let res = await fetch(url + type);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function showForm(type) {
    ul.innerHTML = '';
    var results = await fetchData(type);

    if (type === 'company') {
        results.forEach(function(result) {
            // lists the companies
            const li = document.createElement('li');
            li.innerHTML = result.name + ' --> ' + result.number_of_users;

            // Creates the delete buttons
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete ' + result.name;
            deleteButton.type = 'button';

            deleteButton.addEventListener('click', function() {
                deleteCompany(result.name);
                location.reload();
            });

            // Hierarchy
            ul.appendChild(li);
            li.appendChild(deleteButton);
        })
    } else {
        results.forEach(function(result) {
            // lists the companies
            const li = document.createElement('li');
            li.innerHTML = result.name + ', ' + result.email + ' --> ' + result.company;

            // Creates the delete buttons
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete ' + result.name;
            deleteButton.type = 'button';

            deleteButton.addEventListener('click', function() {
                deleteUser(result.email);
                location.reload();
            });

            li.appendChild(deleteButton);
            ul.appendChild(li);
        })
    }    
}

function addEventsToRadios() {
    radioCompany.onclick = function() {
        showForm('company');
    }
    radioUser.onclick = function() {
        showForm('user');
    }
}

addEventsToRadios();