const radioCompany = document.getElementById('radio-company');
const radioUser = document.getElementById('radio-user');

function createFormCompany() {
    // Builds the form
    const form = document.createElement('form');
    form.id = 'data-form';
    form.method = 'POST';
    form.action = '/addcompany';

    // Builds the inputs
    const div = document.createElement('div');
    div.classList.add('company-name');

    const textfield = document.createElement('input');
    textfield.type = 'text';
    textfield.name = 'company-name';
    textfield.id = 'company-name';

    const span = document.createElement('p');
    span.innerHTML = "Company name";

    // Builds submit button
    const submit = document.createElement('button');
    submit.type= 'submit';
    submit.innerHTML = 'Submit';

    // Hierarchy
    document.getElementsByClassName('form-container')[0].appendChild(form);
    form.appendChild(div);
    div.appendChild(span);
    div.appendChild(textfield);
    form.appendChild(submit);
}

function createFormUser() {
    // Builds the form
    const form = document.createElement('form');
    form.id = 'data-form';
    form.method = 'POST';
    form.action = '/adduser';

    // Builds the inputs
    const div = document.createElement('div');
    div.classList.add('user-name');

        // user textfield
    const nameSpan = document.createElement('p');
    nameSpan.innerHTML = "User name";

    const name = document.createElement('input');
    name.type = 'text';
    name.name = 'user-name';
    name.id = 'user-name';

        // email textfield
    const emailSpan = document.createElement('p');
    emailSpan.innerHTML = "User email";
    
    const email = document.createElement('input');
    email.type = 'text';
    email.name = 'user-email';
    email.id = 'user-email';

        // password textfield
    const passwordSpan = document.createElement('p');
    passwordSpan.innerHTML = "User password";
        
    const password = document.createElement('input');
    password.type = 'password';
    password.name = 'user-password';
    password.id = 'user-password';

        // company textfield
    const companySpan = document.createElement('p');
    companySpan.innerHTML = "User company";

    const company = document.createElement('input');
    company.type = 'company';
    company.name = 'user-company';
    company.id = 'user-company';

    // Builds submit button
    const submit = document.createElement('button');
    submit.type= 'submit';
    submit.innerHTML = 'Submit';

    // Builds the container divs for each input field
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('user-name-div');
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('user-email-div');
    const passwordDiv = document.createElement('div');
    passwordDiv.classList.add('user-password-div');
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('user-company-div');

    // Hierarchy
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
    radioCompany.addEventListener('click', function() {
        showForm("company");
    })
    radioUser.addEventListener('click', function() {
        showForm("user");
    })
}

// Add styling to the JS created components
function addStyling() {
    const textfieldClasses = [
        'mb-6',
        'bg-gray-100',
        'rounded-xl',
        'px-1',
    ];
    
    const submitClasses = [
        'bg-gray-100',
        'rounded-xl',
        'px-2',
        'py-1',
    ];

    const textfields = document.getElementsByTagName('input');
    for (field of textfields) {
        if (field.type === 'text' || field.type === 'password') {
            textfieldClasses.forEach(function(textfield_class) {
                field.classList.add(textfield_class);
            })
        }
    }

    const paragraphs = document.getElementsByTagName('p');
    for (paragraph of paragraphs) {
        if (paragraph.classList.contains('header-p')) {
            continue;
        }
        paragraph.classList.add('mr-3');
    }

    const forms = document.getElementsByTagName('form');
    for (form of forms) {
        form.classList.add('mb-4');
    }

    const buttons = document.getElementsByTagName('button');
    for (button of buttons) {
        if (button.type = 'submit' && button.innerHTML === 'Submit') {
            submitClasses.forEach(function(submit_class) {
                button.classList.add(submit_class);
            })
        }
    }
}

addEvents();
