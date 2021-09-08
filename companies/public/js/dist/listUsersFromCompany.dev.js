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
    } catch (_unused2) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/changecompany?user=";
  url += email;
  url += "&newcompany=" + newCompany;
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
        li.classList.add('font-semibold');
        li.classList.add('my-2');
        var deleteButton = document.createElement("button");
        var changeButton = document.createElement("button");
        li.innerHTML = user.name;
        deleteButton.innerHTML = "Delete " + user.name;
        deleteButton.type = "button"; // Adds styling to the delete button

        var deleteButtonClasses = ['px-2', 'py-1', 'bg-gray-100', 'rounded-xl', 'mx-3', 'hover:bg-red-100'];
        deleteButtonClasses.forEach(function (delete_class) {
          deleteButton.classList.add(delete_class);
        }); // Add styling to the change buttons

        var changeButtonClasses = ['px-2', 'py-1', 'bg-gray-100', 'rounded-xl'];
        changeButtonClasses.forEach(function (change_class) {
          changeButton.classList.add(change_class);
        });

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
          var textfieldClasses = ['mt-1', 'bg-gray-100', 'rounded-xl', 'px-1', 'mr-3', 'text-center'];
          textfieldClasses.forEach(function (textfield_class) {
            newCompanyTextfield.classList.add(textfield_class);
          });
          submitButton.type = "button";
          submitButton.innerHTML = "Update";
          var submitClasses = ['bg-gray-100', 'rounded-xl', 'px-2', 'py-1'];
          submitClasses.forEach(function (submit_class) {
            submitButton.classList.add(submit_class);
          });
          submitButton.addEventListener("click", function () {
            changeUsersCompany(user.email, newCompanyTextfield.value);
          });
          li.appendChild(form);
          form.appendChild(newCompanyTextfield);
          form.appendChild(submitButton); // Removes the 'click' event

          changeButton.onclick = '';
        };

        ulist.appendChild(li);
        li.appendChild(deleteButton);
        li.appendChild(changeButton);
      });
    } catch (_unused3) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/provideusers?company=";
  request.open("GET", url + company);
  request.send();
}

company.onchange = function () {
  getUsers(company.value);
};