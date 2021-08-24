"use strict";

var company = document.getElementById('company');
var ulist = document.getElementById('user-list');

function deleteUser(email) {
  var request = new XMLHttpRequest();

  request.onload = function () {
    try {
      location.reload();
    } catch (_unused) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/deleteuser?user=";
  request.open("GET", url + email);
  request.send();
}

function changeUsersCompany(email, newCompany) {
  var request = new XMLHttpRequest();

  request.onload = function () {
    try {
      location.reload();
      console.log(this.response);
    } catch (_unused2) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/changecompany?user=";
  url += email;
  url += "&newcompany=";
  url += newCompany;
  request.open("GET", url);
  request.send();
}

function getUsers(company) {
  var request = new XMLHttpRequest();

  request.onload = function () {
    try {
      ulist.innerHTML = "";
      var response = JSON.parse(this.response); // Daca lista e goala, mesaj de eroare

      if (!response.length) {
        ulist.innerHTML = "The company has no recorded users";
        return;
      } // Populeaza lista cu useri si creeaza butoanele de delete


      response.forEach(function (user) {
        var li = document.createElement("li");
        var deleteButton = document.createElement("button");
        var changeButton = document.createElement("button");
        li.innerHTML = user.name;
        deleteButton.innerHTML = "Delete " + user.name;
        deleteButton.type = "button";

        deleteButton.onclick = function () {
          deleteUser(user.email);
        };

        changeButton.innerHTML = "Change company";
        changeButton.type = "button";

        changeButton.onclick = function () {
          var form = document.createElement("form");
          var newCompanyTextfield = document.createElement("input");
          var submitButton = document.createElement("button");
          form.action = "#";
          newCompanyTextfield.type = "text";
          newCompanyTextfield.id = "new-company";
          newCompanyTextfield.name = "new-company";
          newCompanyTextfield.placeholder = "The new company";
          submitButton.type = "button";
          submitButton.innerHTML = "Update";
          submitButton.addEventListener("click", function () {
            changeUsersCompany(user.email, newCompanyTextfield.value);
          });
          li.appendChild(form);
          form.appendChild(newCompanyTextfield);
          form.appendChild(submitButton);
        };

        ulist.appendChild(li);
        li.appendChild(deleteButton);
        li.appendChild(changeButton);
      });
    } catch (_unused3) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/users?company=";
  request.open("GET", url + company);
  request.send();
}

company.onchange = function () {
  getUsers(company.value);
};