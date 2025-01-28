// Mock credentials for registration and login
const users = [];

const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const portal = document.getElementById('portal');

// Switch to the Register Page
document.getElementById('register-link').addEventListener('click', function() {
    loginPage.classList.add('hidden');
    registerPage.classList.remove('hidden');
});

// Switch back to the Login Page
document.getElementById('login-link').addEventListener('click', function() {
    registerPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

// Handle Login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loginPage.classList.add('hidden');
        portal.classList.remove('hidden');
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Handle Registration
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users.some(user => user.username === username)) {
        alert("Username already exists.");
    } else {
        users.push({ username, password });
        alert("Registration successful! Please log in.");
        registerPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
    }
});

