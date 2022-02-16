let userNumber = prompt('Введите уровень допуска - от 0 до 7');
let userRights;

switch (userNumber) {
    case '0': userRights = '0 - никаких прав';
    break;
    case '1': userRights = '1 - только выполнение';
    break;
    case '2': userRights = '2 - только запись';
    break;
    case '3': userRights = '3 - выполнение и запись';
    break;
    case '4': userRights = '4 - только чтение';
    break;
    case '5': userRights = '5 - чтение и выполнение';
    break;
    case '6': userRights = '6 - чтение и запись';
    break;
    case '7': userRights = '7 - чтение запись и выполнение';
    break;
    
    default: userRights = 'Некорректное число';
}

console.log(userRights);
