let balance = 2000;
const correctUsername = 'user123';
const correctPassword = 'pass123';
let loginAttempts = 0;

function displayMenu() {
    console.log('\n1. Deposit');
    console.log('2. Withdraw');
    console.log('3. View Balance');
    console.log('4. Transfer Money');
    console.log('5. Logout');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
    showMenu();
    } else {
    loginAttempts++;
    alert('Invalid credentials. Attempts left: ' + (3 - loginAttempts));

    if (loginAttempts >= 3) {
        alert('Too many unsuccessful login attempts. Account locked.');
        location.reload();
        }
    }
}

function showMenu() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function deposit() {
    const amount = parseFloat(prompt('Enter the deposit amount: $'));
    if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a valid positive number.');
    return;
    }

    balance += amount;
    alert('Deposit successful. Current balance: $' + balance.toFixed(2));
}

function withdraw() {
    const amount = parseFloat(prompt('Enter the withdrawal amount: $'));
    if (isNaN(amount) || amount <= 0 || amount > balance) {
    alert('Invalid amount. Please enter a valid positive number within your balance.');
    return;
    }

    balance -= amount;
    alert('Withdrawal successful. Current balance: $' + balance.toFixed(2));
}

function viewBalance() {
    alert('Current balance: $' + balance.toFixed(2));
}

function transferMoney() {
    const amount = parseFloat(prompt('Enter the transfer amount: $'));
    if (isNaN(amount) || amount <= 0 || amount > balance) {
    alert('Invalid amount. Please enter a valid positive number within your balance.');
    return;
    }

    const recipient = prompt('Enter the recipient\'s username: ');
    alert(`$${amount} transferred to ${recipient}.`);
    balance -= amount;
}

function logout() {
    location.reload();
}
