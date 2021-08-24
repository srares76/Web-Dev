"use strict";

var buttons = document.getElementsByTagName('button');
var radioCompany = document.getElementById('radio-company');
var radioUser = document.getElementById('radio-user');
var ul = document.getElementById('data-list');

function deleteCompany(company) {
  var request = new XMLHttpRequest();

  request.onload = function () {
    try {
      console.log(this.response);
      location.reload();
    } catch (_unused) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/deletecompany?company=";
  request.open("GET", url + company);
  request.send();
}

function deleteUser(email) {
  var request = new XMLHttpRequest();

  request.onload = function () {
    try {
      console.log(this.response);
      location.reload();
    } catch (_unused2) {
      console.log("Error: " + request.status);
    }
  };

  var url = "http://127.0.0.1/deleteuser?user=";
  request.open("GET", url + email);
  request.send();
}

function fetchData(type) {
  var url, res;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "http://127.0.0.1/listdata?type=";
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url + type));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(res.json());

        case 7:
          return _context.abrupt("return", _context.sent);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
}

function showForm(type) {
  var results;
  return regeneratorRuntime.async(function showForm$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ul.innerHTML = '';
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetchData(type));

        case 3:
          results = _context2.sent;

          if (type === 'company') {
            results.forEach(function (result) {
              // lists the companies
              var li = document.createElement('li');
              li.innerHTML = result.name + ' --> ' + result.number_of_users; // Creates the delete buttons

              var deleteButton = document.createElement('button');
              deleteButton.innerHTML = 'Delete ' + result.name;
              deleteButton.type = 'button';
              deleteButton.addEventListener('click', function () {
                deleteCompany(result.name);
                location.reload();
              }); // Hierarchy

              ul.appendChild(li);
              li.appendChild(deleteButton);
            });
          } else {
            results.forEach(function (result) {
              // lists the companies
              var li = document.createElement('li');
              li.innerHTML = result.name + ', ' + result.email + ' --> ' + result.company; // Creates the delete buttons

              var deleteButton = document.createElement('button');
              deleteButton.innerHTML = 'Delete ' + result.name;
              deleteButton.type = 'button';
              deleteButton.addEventListener('click', function () {
                deleteUser(result.email);
                location.reload();
              });
              li.appendChild(deleteButton);
              ul.appendChild(li);
            });
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function addEventsToRadios() {
  radioCompany.onclick = function () {
    showForm('company');
  };

  radioUser.onclick = function () {
    showForm('user');
  };
}

addEventsToRadios();