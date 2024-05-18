const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Получаем существующих пользователей из localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Проверяем, существует ли уже пользователь с таким же логином
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
        alert('This username is already taken. Please choose another one.');
    } else {
        const userData = {
            username,
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        };

        // Добавляем нового пользователя в список существующих
        existingUsers.push(userData);

        // Сохраняем обновленный список пользователей в localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Registration successful!');
    }
});
