// login form event
async function loginFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#id-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (id && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                id,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//sign up form event
async function signupFormHandler(event) {
    event.preventDefault();

    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (id && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                firstname,
                lastname,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', loginFormHandler);