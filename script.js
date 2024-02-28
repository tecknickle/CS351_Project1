const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Username is Required.');
    } else {
        setSuccess(username);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is Required.');
    } else {
        setSuccess(email);
    }
    
    if(passwordValue === '') {
        setError(password, 'Password is Required.');
    } else {
        setSuccess(password);
    }
    
    if(password2Value === '') {
        setError(password2, 'Please confirm your password.');
    } else if (password2Value !== passwordValue){
        setError(password2, "Passwords do not match.");
    } else {
        setSuccess(password2);
    }
    
};



if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}