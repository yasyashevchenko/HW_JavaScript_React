// Условные и логические операторы

// 1	
// В переменную x записывается число, введенное пользователем в диалоговое окно. 
// Проверить и вывести на экран, x – отрицательное число, положительное или ноль.

// let x = +prompt("Введите число");
// if (x < 0) {
//     alert("Вы ввели отрицательное число");
// } else if (x > 0) {
//     alert("Вы ввели положительное число");
// } else {
//     alert("Вы ввели ноль");
// }


// 2	
// У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
// В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
// С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

// let moneyUser1 = +prompt("Сумма наличных у тебя", 1500);
// let moneyUser2 = +prompt("Сумма наличных у друга", 1800);
// let allMoney = moneyUser1 + moneyUser2;
// allMoney > 50000 ? alert("Летим на Майорку") : alert("Идем пить пиво");


// 3	
// В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, 
// в alert выводится “Выслать повестку”.

// let age = +prompt("Твой возраст", 25);
// if (age >= 20 && age < 27) {
//     alert("Выслать повестку");
// } else {
//     alert("Пока")
// }


// 4	
// Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. 
// Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.

// let busHome = +prompt("Номер маршрутки"); 
// switch (busHome) {
//     case 7:
//         alert("Едем домой");
//         break;
//     case 225:
//         alert("Едем домой");
//         break;
//     case 255:
//         alert("Едем домой");
//         break;
//     default:
//         alert("Ожидаем следующую маршрутку");
// }


// 5	
// В переменную day записан текущий день недели. Если это не суббота и не воскресенье, 
// выведите в alert сообщение о необходимости идти на работу.

// let date = new Date();
// if (date.getDay() != 0 || date.getDay() != 6) {
//     alert("Необходимо идти на работу");
// } else {
//     alert("Сегодня выходной");
// }


// 6
// Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, 
// а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.

// let x = +prompt("Введите число от -20 до 20 для x", -5);
// let y = +prompt("Введите число от -20 до 20 для y", 2);
// if ((x = 1 || x > 1) && (y >=3 || y < 0)) {
//     console.log(x + y);
// } else {
//     console.log("Неверно");
// }

// 7
// Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, 
// то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран.

// let x = +prompt("Введите число от 0 до 20 для x", 5);
// let y = +prompt("Введите число от 0 до 20 для y", 8);
// if ((x > 2 && x < 11) || (y >=6 && y < 14)) {
//     alert(x * 2);
// } else {
//     alert(x + 5);
// }


// 8
// Получите из prompt значение для имени пользователя. Выведите на экран приветствие. 
// Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.

// let nameUser = prompt("Имя пользователя", "Кира");
// if ((nameUser = "") || (nameUser = "undefined")) {
//     alert("Вы не ввели свое имя");
// } else {
//     alert(`Привет ${nameUser}!`);
// }
   

// 9
// Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. 
// Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). 
// Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, 
// если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие 
// в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.

// let greeting = "";
// let lang = prompt();
// if (lang != "") {
//     switch (lang) {
//         case "ru":
//             greeting = "Привет";
//          break;
//         case "en": 
//             greeting = "Hello";
//         break;
//         case "de": 
//             greeting = "Hallo";
//         break;
//         default:
//             alert("Данный язык не поддерживается"); 
//         break;
//     }
// } if ((lang = "ru") || (lang = "en") || (lang = "de")) {
//     alert(greeting);
// }


// 10
// В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц 
// (зима, лето, весна, осень).

// let month = new Date();
// if (month.getMonth() === 12 || month.getMonth() === 1 || month.getMonth() === 2) {
//     alert("Текущая пора года: Зима");
// } else if (month.getMonth() === 3 || month.getMonth() === 4 || month.getMonth() === 5) {
//     alert("Текущая пора года: Весна");
// } else if (month.getMonth() === 6 || month.getMonth() === 7 || month.getMonth() === 8) {
//     alert("Текущая пора года: Лето");
// } else if (month.getMonth() === 9 || month.getMonth() === 10 || month.getMonth() === 11) {
//     alert("Текущая пора года: Осень");
// } else {
//     alert("Такого месяца не существует");
// }

// 11
// Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. 
// Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке 
// в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). 
// Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.

// let lang = prompt("ru или en");
// let day = +prompt("значение от 0 до 6-ти");
// const dayRu = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const dayEn = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
// let result;
// switch (lang) {
// 	case "ru":
// 		result = dayRu;
// 	break;
// 	case "en":
// 		result = dayEn;
// 	break;
// }
// alert(result[day]);


// 12	
// 1. Получить от пользователя имя и возраст. Записать это в разные переменные.
// 2. Написать конструкцию switch, которая проверяет 2 случая
//     	    - Если имя === "John" и возраст === 29 вывести в консоль "Привет (имя) (возраст)"
//     	    - Если имя === "Kate" и возраст === 15 вывести в консоль "Привет (имя) (возраст)"
// - Если не совпадает ни одно условие вывести в консоль "Пока" 

// let userName = prompt("Вас зовут: John или Kate", "Kate");
// let userAge = +prompt("Ваш возраст: 29 или 15", 15);

// if ((userName === "John" && userAge === 29) || (userName === "Kate" && userAge === 15)){
//     console.log(`Привет ${userName} ${userAge}`);
// } else{
//     console.log("Пока");
// }

// (Написать решение задачи еще и через оператор ?)
// ((userName === "John" && userAge === 29) || (userName === "Kate" && userAge === 15)) === true ? console.log(`Привет ${userName} ${userAge}`) : console.log("Пока");




// Циклы

// 1
// Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.


// let stringUser = "";
// for (let i = 0; i < 5; i++) {
//     stringUser = stringUser + '.#';
// }
// console.log(`${stringUser}.`);


// 2
// Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.

// let squareNumber = "";
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 0) {
//         squareNumber = squareNumber + " " + i * i;
//     }
// }

// console.log(squareNumber);


// 3
// Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. 
// Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you

// let userName = prompt("Enter your name");
// const congr1 = "Happy birthday to you";
// const congr2 = `Happy birthday dear ${userName}`;
// for (let i = 0; i < 4; i++) {
//     if (i === 2) {
//         alert(congr2);
//         continue;
//     }
//     alert(congr1);
// }


// 4
// Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

// let cycleUser;
// while (!cycleUser) {
//     cycleUser = confirm("Cancel or Ok");
//     console.log(cycleUser);
// }


// 5	
// В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, 
// введенного пользователем. Результат отобразите в окне alert.

// let numberUser = +prompt("Введите любое число");
// let sum = 0;
// for (let i = 1; i < numberUser; i+=2) {
//     sum = sum + i;
//     alert(sum);
// }


// 6
// Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. 
// Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

// let i = 0;
// while (true) {
//     let numberRandom = Math.random();
//     console.log(numberRandom);
//     i++;
//     console.log(i);
//     if (numberRandom > 0.9) {
//         alert("случайное число, прервавшее цикл " + numberRandom);
//         alert("количество итераций " + i);
//         break;
//     }
// }


// 7
// Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 
// 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(i + "x" + j + "=" + i * j);
//     }
// }


// 8	
// С помощью цикла for с пустым телом сформируйте строку, 
// представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

// let strUser = "";
// let fib1 = 0;
// let fib2 = 1;
// let fib = fib1 + fib2;
// for (let i = 0; i <= 20; strUser = strUser + fib1 + "  ", fib = fib1 + fib2, fib1 = fib2, fib2 = fib, i++) {
// };
// console.log(strUser);


// 9	
// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, 
// пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, 
// их общую сумму и среднее арифметическое.

// let numberKeyboard;
// let i = -1;
// let sum = 0;
// do {
//     numberKeyboard = +prompt("Enter number");
//     i++;
//     sum = sum + numberKeyboard;
// }
// while (numberKeyboard);
// alert("Amount of numbers: " + i + "; All summa: " + sum + "; Average: " + sum / i);


// 10
// Напишите проверку пароля, введенного пользователем (заведомо определите пароль). 
// Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. 
// Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, 
// пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, 
// выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. 
// Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, 
// тогда снова выдать запрос пароля

// const password = "Home";
// let authorization = "";
// let question = "";
// do {
//     authorization = prompt("Введите Ваш пароль");
//     if (authorization === null) {
//         let question = confirm("Вы уверены, что хотите отменить авторизацию?");
//     if (question === true) {
//         alert("Вы отменили авторизацию");
//         break;
//     }
//     }
//     if (password === authorization) {
//         alert("Вы успешно авторизованы");
//         break;
//     } else {
//         authorization = prompt("Введите Ваш пароль");
//     }
// }
// while (password !== authorization);


// 11
// Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:
// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; 

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
