let  i = 1;
while (true) {
    let num = prompt('Введите число', '');
    if (num <= 100) {
        alert(num)
    } else if (!num || num > 100) {
        break
    }
}