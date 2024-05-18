const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Получаем существующих пользователей из localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Проверяем, существует ли пользователь с введенными логином и паролем
    const user = existingUsers.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        // Перенаправляем пользователя на другую страницу
        window.location.href = '../index.html';
    } else {
        alert('Invalid username or password');
    }
});
