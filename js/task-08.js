const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formPassword = formElements.password.value;

    if (formEmail === '' || formPassword === '') {
        return alert ('Please fill up all the fields!');
    };

    const userData = {Email: formEmail, Password: formPassword};
    console.log(userData);

    event.currentTarget.reset();
});


