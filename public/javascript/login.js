// login form event
async function loginFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('#id-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (id && password) {
        const response = await fetch('/api/employees/login', {
            method: 'post',
            body: JSON.stringify({
                id,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/orders');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//sign up form event
async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (first_name && last_name && password) {
        const response = await fetch('/api/employees', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // document.location.replace('/login');
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);