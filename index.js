let userName = prompt('Кто там?', '');
if (userName === null) {
    alert('Отменено');
} else if (userName === 'Админ') {
    let password = prompt('Пароль?', '');
    if (password === null) {
        alert('Отменено');
    } else if (password === 'Я Главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль');
    }
} else {
    alert('Я вас не знаю');
}