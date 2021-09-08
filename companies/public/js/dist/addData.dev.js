"use strict";

var radioCompany = document.getElementById('radio-company');
var radioUser = document.getElementById('radio-user');

function createFormCompany() {
  // Builds the form
  var form = document.createElement('form');
  form.id = 'data-form';
  form.method = 'POST';
  form.action = '/addcompany'; // Builds the inputs

  var div = document.createElement('div');
  div.classList.add('company-name');
  var textfield = document.createElement('input');
  textfield.type = 'text';
  textfield.name = 'company-name';
  textfield.id = 'company-name';
  var span = document.createElement('p');
  span.innerHTML = "Company name"; // Builds submit button

  var submit = document.createElement('button');
  submit.type = 'submit';
  submit.innerHTML = 'Submit'; // Hierarchy

  document.getElementsByClassName('form-container')[0].appendChild(form);
  form.appendChild(div);
  div.appendChild(span);
  div.appendChild(textfield);
  form.appendChild(submit);
}

function createFormUser() {
  // Builds the form
  var form = document.createElement('form');
  form.id = 'data-form';
  form.method = 'POST';
  form.action = '/adduser'; // Builds the inputs

  var div = document.createElement('div');
  div.classList.add('user-name'); // user textfield

  var nameSpan = document.createElement('p');
  nameSpan.innerHTML = "User name";
  var name = document.createElement('input');
  name.type = 'text';
  name.name = 'user-name';
  name.id = 'user-name'; // email textfield

  var emailSpan = document.createElement('p');
  emailSpan.innerHTML = "User email";
  var email = document.createElement('input');
  email.type = 'text';
  email.name = 'user-email';
  email.id = 'user-email'; // password textfield

  var passwordSpan = document.createElement('p');
  passwordSpan.innerHTML = "User password";
  var password = document.createElement('input');
  password.type = 'password';
  password.name = 'user-password';
  password.id = 'user-password'; // company textfield

  var companySpan = document.createElement('p');
  companySpan.innerHTML = "User company";
  var company = document.createElement('input');
  company.type = 'company';
  company.name = 'user-company';
  company.id = 'user-company'; // Builds submit button

  var submit = document.createElement('button');
  submit.type = 'submit';
  submit.innerHTML = 'Submit'; // Builds the container divs for each input field

  var nameDiv = document.createElement('div');
  nameDiv.classList.add('user-name-div');
  var emailDiv = document.createElement('div');
  emailDiv.classList.add('user-email-div');
  var passwordDiv = document.createElement('div');
  passwordDiv.classList.add('user-password-div');
  var companyDiv = document.createElement('div');
  companyDiv.classList.add('user-company-div'); // Hierarchy

  document.getElementsByClassName('form-container')[0].appendChild(form);
  form.appendChild(div);
  div.appendChild(nameDiv);
  div.appendChild(emailDiv);
  div.appendChild(passwordDiv);
  div.appendChild(companyDiv);
  nameDiv.appendChild(nameSpan);
  nameDiv.appendChild(name);
  emailDiv.appendChild(emailSpan);
  emailDiv.appendChild(email);
  passwordDiv.appendChild(passwordSpan);
  passwordDiv.appendChild(password);
  companyDiv.appendChild(companySpan);
  companyDiv.appendChild(company);
  form.appendChild(submit);
}

function showForm(type) {
  // Deletes the other form if it exists
  if (document.getElementById('data-form') != null) {
    document.getElementById('data-form').remove();
  }

  if (document.getElementById('email-taken-error') != null) {
    document.getElementById('email-taken-error').remove();
  }

  if (type === 'company') {
    createFormCompany();
  } else {
    createFormUser();
  }

  addStyling();
}

function addEvents() {
  radioCompany.addEventListener('click', function () {
    showForm("company");
  });
  radioUser.addEventListener('click', function () {
    showForm("user");
  });
} // Add styling to the JS created components


function addStyling() {
  var textfieldClasses = ['mb-6', 'bg-gray-100', 'rounded-xl', 'px-1'];
  var submitClasses = ['bg-gray-100', 'rounded-xl', 'px-2', 'py-1'];
  var textfields = document.getElementsByTagName('input');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = textfields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      field = _step.value;

      if (field.type === 'text' || field.type === 'password') {
        textfieldClasses.forEach(function (textfield_class) {
          field.classList.add(textfield_class);
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var paragraphs = document.getElementsByTagName('p');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = paragraphs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      paragraph = _step2.value;

      if (paragraph.classList.contains('header-p')) {
        continue;
      }

      paragraph.classList.add('mr-3');
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var forms = document.getElementsByTagName('form');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = forms[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      form = _step3.value;
      form.classList.add('mb-4');
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var buttons = document.getElementsByTagName('button');
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = buttons[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      button = _step4.value;

      if (button.type = 'submit' && button.innerHTML === 'Submit') {
        submitClasses.forEach(function (submit_class) {
          button.classList.add(submit_class);
        });
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

addEvents();